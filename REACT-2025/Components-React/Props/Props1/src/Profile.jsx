function Profile(){ // parent
     return(
          <div>
               <h1>Profile Cgard challenge</h1>
               <ProfileCard // chaid component // we are using Hoisting in JavaScript
               name="Alice"
               age={25}
               greeting={
                    <div>
                         <strong>Hi Alice, Have a wonderful day!</strong>
                    </div>
               }
               >
                    <p>Hobbies: Reading, VR , Ui/Ux</p>
                    <button>Contact</button>
               </ProfileCard>

               <ProfileCard // chaid component // we are using Hoisting in JavaScript
               name="Bob"
               age={26}
               greeting={
                    <div>
                         <strong>Hi Bob, Have a wonderful day!</strong>
                    </div>
               }
               > 
                    <p>Hobbies: Waching Anime</p> {/**in componet acceing data then use children for get data 
                     * we are jsx as a props use 
                    */}
                    <button>Contact</button>
               </ProfileCard>
          </div>
     );
}
export default Profile;


// function ProfileCard(props){ // clasic funtion
//      const { name, age, greeting, children} = props;
//      return(
//           <>
//                <h2>Name:{name}</h2>
//                <p>Age:{age}</p>
//                <p>{greeting}</p>
//                <div>{children}</div>
//           </>
//      );
// }


function ProfileCard({name, age, greeting, children}){ // clasic funtion // Destructuring
     // const { name, age, greeting, children} = props;
     // children propati note
     // paticular elemnt in data we get 
     return(
          <>
               <h2>Name:{name}</h2>
               <p>Age:{age}</p>
               <p>{greeting}</p>
               <div>{children}</div>
          </>
     );
}