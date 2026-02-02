interface ChaiCardProps {
     name: string;
     price: number;
     isSpecial?: boolean;
}

export const ECard = ({name, price, isSpecial = false}: ChaiCardProps) => {
     return(
          <article>
               <h2>{name} {isSpecial && <span>🌟</span>}</h2>
               <p>Price: ${price}</p>
               
          </article>
     )
}