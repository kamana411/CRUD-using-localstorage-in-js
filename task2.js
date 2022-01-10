const form = document.querySelector('form');
const table = document.querySelector('table');
const data = document.querySelector('.data');

//storing data from form to local storage
form.addEventListener('submit', e=>{
    e.preventDefault();
   username = form.name.value;
   useremail = form.email.value;
    let user_datas = new Array();
    user_datas = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]

    user_datas.push({
        "name":username,
        "email" :useremail
    })
    localStorage.setItem('users',JSON.stringify(user_datas));
    form.reset();
    // table.classList.remove('d-none');
    showdata();
   

   
 
});

//showing the data from localstorage in table
const showdata = ()=>{
    table.classList.remove('d-none');
    data.innerHTML ="";
    let user_datas = new Array();
    user_datas = JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
    if(user_datas){
        for(let i=0;i<user_datas.length;i++){
            let addData = document.createElement('tr');
            const rname= localStorage.getItem(user_datas[i].name);
            const remail= user_datas[i].email;
            // console.log(rname);
            addData.innerHTML = `<td class="name_elem" contenteditable="true">${user_datas[i].name}</td><td class="email_elem" contenteditable="true">${user_datas[i].email}</td><td><button class="delete btn btn-success" onclick='del(${i})' >Delete</button></td><td><button class="edit btn btn-success" onclick='edit(${i})'>Edit</button></td>`;
            data.appendChild(addData);
        }
    }
 }

//deleting individual data
const del = index=>{
    // console.log(index);
    user_datas = JSON.parse(localStorage.getItem('users'));
    user_datas.splice(index,1);
    localStorage.setItem('users',JSON.stringify(user_datas));
    showdata();
}

//editing individual data
const edit = index=>{
    const name_elem = document.querySelector('.name_elem');
//    const uelem = elem.innerHTML;
    const email_elem = document.querySelector('.email_elem');
//    const uelem = elem.innerHTML;
    user_datas = JSON.parse(localStorage.getItem('users'));
    user_datas[index].name = name_elem.innerHTML;
    //user_datas[index].email = email_elem.innerHTML;
    localStorage.setItem('users',JSON.stringify(user_datas));

    showdata();

    
}


