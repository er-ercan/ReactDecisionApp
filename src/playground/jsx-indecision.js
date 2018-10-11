console.log("App.js is running");

//JSX - JavaScript XML
//var template = "Ercan" or 123 or something else; this is JS

const app = {
    title: "Try to React",
    subTitle: "Some Subtitle",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value; //Bir satır üstü ve bu satır tamamen anlaşılmadı. //Öğrenildi.

    if(option){
        app.options.push(option);
        e.target.elements.option.value = ""; 
    }
    renderTemplate();
};

const removeAll = () => {
    app.options = [];
    renderTemplate();
};

const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
                <h3>{app.subTitle}</h3>
                <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
                <p>{app.options.length}</p>
                <button onClick={removeAll}>Remove All</button>
                <ol>
                    <li>Sıralanacak Madde</li>
                    <li>Sıralanacak Madde</li>
                </ol>
                <form onSubmit = {onFormSubmit}>
                    <input type="text" name="option" className=""></input>
                    <button>Add Option</button>
                   
                </form>
        </div>
        );

        ReactDOM.render(template, appRoot);
};
renderTemplate();


// const user = {
//     name: "Ercan",
//     age: 27,
//     location: "Ankara"
// };

// // var userName = "Mike";
// // var userAge = 27;
// // var userLocation = "Ankara";

// function getLocation(location){
//     if(location)
//     {
//         return <h5>Location: {location}</h5>;    
//     }
//     else
//     {
//         return "Samsun";
//     }
    
// }


// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "İsim misim Yok"}</h1> {/*Tarnary Expression BU DOGRU İSE ? BUNU YAP : Değilse BUNU*/}
//         <p>Age : {user.age}</p>
//         {getLocation(user.location)}
        
//     </div>
// );

// const father = {
//     name:"Özkan ER",
//     age:55,
//     job:"Mechenical Engineer",
//     hobbies:"Watching TV",
//     livingCity:"Samsun"
// };
// function agePlus(age){
// if(age<60){
//     return <h5>You're very young: {age}</h5>
// }else{
//     return <h6>OLD :(</h6>
// }
// }
// const likeAfather =(
//     <div>
//         <h1>{father.name ? father.name: "Ercan Er"}</h1>
//         <h2>Properties</h2>
//         {father.age < 90 && agePlus(father.age)}
//         <li>{father.job}</li>
//         <li>{father.hobbies}</li>
//         <li>{father.livingCity}</li>
//     </div>
// );



