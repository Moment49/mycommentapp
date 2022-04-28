let posts = document.getElementById("posts");
let msg = document.getElementById("msg");
let input = document.getElementById("input");
let form = document.getElementById("form");

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    console.log("Clicked")
    formValidation();
});
/*Check for form validation */
function formValidation(){
    if(input.value === ''){
        /*Failure state */
        console.log('Failure')
        msg.innerHTML = 'Error please leave a comment'
    }else{
        console.log("Success")
        AcceptData();
    }
}

/*Accept Data and store */
let data = {};
function AcceptData(){
    data['text'] = input.value;
    console.log(data);
    createPost();
    msg.innerHTML = ''
};
/*Create a Post and Upload data to screen */
function createPost (){
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </span>
    </div>
    `;
    input.value = '';
};


