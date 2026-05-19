import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay, FaExpand, FaCompress } from 'react-icons/fa';
import './ImageSlider.scss';

const slides = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1015/1920/1080',
    title: 'Mountain Adventure',
    description: 'Breathtaking peaks and endless horizons'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/133/1920/1080',
    title: 'Ocean Serenity',
    description: 'Golden sunset over peaceful waves'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/201/1920/1080',
    title: 'Enchanted Forest',
    description: 'Mystical woods filled with magic'
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/251/1920/1080',
    title: 'Neon City Nights',
    description: 'Vibrant urban landscape'
  },
  {
    id: 5,
    image: 'https://picsum.photos/id/1015/1920/1080',
    title: 'Mountain Adventure',
    description: 'Breathtaking peaks and endless horizons'
  },
  {
    id: 6,
    image: 'https://picsum.photos/id/201/1920/1080',
    title: 'Enchanted Forest',
    description: 'Mystical woods filled with magic'
  },
  {
    id: 7,
    image: 'https://picsum.photos/id/251/1920/1080',
    title: 'Skyline Glow',
    description: 'City lights reflecting on the water'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [progress, setProgress] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentIndex((index + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const nextSlide = useCallback(() => goToSlide(currentIndex + 1), [currentIndex, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentIndex - 1), [currentIndex, goToSlide]);

  // Auto-play with Progress Bar
  useEffect(() => {
    let interval = null;
    let progressInterval = null;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);

      progressInterval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 100);
    } else {
      setProgress(0);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isAutoPlaying, nextSlide]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') setIsAutoPlaying(!isAutoPlaying);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isAutoPlaying]);

  // Touch Swipe
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEndPos = e.changedTouches[0].clientX;
    const diff = touchStart - touchEndPos;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    setTouchStart(null);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`slider-container ${isFullscreen ? 'fullscreen' : ''}`}>
      <div
        className="slider-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={slide.image} alt={slide.title} loading="lazy" />

            <div className="slide-overlay">
              <div className="content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        )}
      </div>

      {/* Arrows */}
      <button className="nav-btn prev-btn" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="nav-btn next-btn" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Top Controls */}
      <div className="top-controls">
        <button className="control-btn" onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
          {isAutoPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="control-btn" onClick={toggleFullscreen}>
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>

      {/* Dots */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={slide.image} alt="" />
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="counter">
        {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
};

export default ImageSlider;