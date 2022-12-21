////////////////////////////
let login_btn = document.getElementById("login_btn");
let librarin_password = document.getElementById("librarin_password");
let librarin_name = document.getElementById("librarin_name");
let login_form_message = document.getElementById("login_form_message");
let data = document.getElementById("data");
let search = document.getElementById("search");
let add_to_bill_btn = document.getElementById("add_to_bill_btn");
let search_btn = document.getElementById("search_btn");
let clear = document.getElementById("clear");
let search_form = document.getElementById("search_form");
let login_form = document.getElementById("login_form");
let parent = document.getElementById("parent");
let confirm = document.getElementById("confirm");
let bill_no = document.getElementById("bill_no");
let date = document.getElementById("date");
let member_name = document.getElementById("member_name");
let book_name = document.getElementById("book_name");
let price = document.getElementById("price");
let bill_form = document.getElementById("bill_form");
let Succsess_message = document.getElementById("Succsess_message");



/////////////////////////




////////////////////////// Class Book & it's child ///////////////////////////////////

class Book {
    constructor(book_id,author,book_name,price,book_status,no_of_available_copies,edition,date_of_purchase){
       this.book_id=book_id ;
       this.author=author ;
       this.book_name=book_name ;
       this.price=price ;
       this.book_status=book_status ;
       this.no_of_available_copies=no_of_available_copies;
       this.edition=edition ;
       this.date_of_purchase=date_of_purchase ;
    }

    displayBookDetails(){
        console.log("Book name : "+this.book_name);
        console.log("Author  : "+this.author);
        console.log("Book ID : "+this.book_id);
        console.log("Status : "+this.status);
        console.log("Price : "+this.price +" LE");
        console.log("Edition : "+this.edition);
        console.log("Date of purchase : "+this.date_of_purchase);
    }


    // updateStatus(){
    //     if (this. )
    // }
}


class Journals extends Book {
    constructor(book_id,author,book_name,price,book_status,no_of_available_copies,edition,date_of_purchase){
        super(book_id,author,book_name,price,book_status,no_of_available_copies,edition,date_of_purchase);
    }

}


class Magazines extends Book {
    constructor(book_id,author,book_name,price,book_status,no_of_available_copies,edition,date_of_purchase){
        super(book_id,author,book_name,price,book_status,no_of_available_copies,edition,date_of_purchase);
    }
    
}


class Study_books extends Book {
    constructor(book_id,author,book_name,price,book_status,no_of_available_copies,edition,date_of_purchase){
        super(book_id,author,book_name,price,book_status,no_of_available_copies,edition,date_of_purchase);
    }
    
}

/////////////////////////////////////////// Data Base /////////////////////////////////////

let book1=new Book(0,"Mohamed","HTML",30,"available",30,"last","10-12-2022") ;
let book2=new Book(1,"Kareem","CSS",40,"available",40,"last","20-12-2022") ;
let book3=new Book(2,"Samy","JS",50,"available",50,"last","30-12-2022") ;

let arr_books=[book1,book2,book3];
let arr_users=[
    {
        user:"aly",
        passCode:123,
    },
    {
        user:"amr",
        passCode:456,
    },
    {
        user:"omar",
        passCode:789,
    }
];

///////////////////////////////////////////////////////////////////////////////////////////

// let mag=new Magazines("0","mohamed","Js","Available","first Edition","12-12-2022");
// let book=new Book("0","aly","Js","Available","first Edition","12-12-2022");

// mag.displayBookDetails();
// mag.updateStatus("Not available")
// console.log("......................")
// mag.displayBookDetails();


///////////////////////////////////////// Librarian ///////////////////////////////////////

class Librarian {
    constructor(librarian_name,librarian_password){
        this.librarian_name=librarian_name;
        this.password=librarian_password;
    }

    verifyMember(){
       
        for (let i = 0; i < arr_users.length; i++) {
            if(arr_users[i].user==librarin_name.value && arr_users[i].passCode==librarin_password.value){
                console.log(i);
                console.log(arr_users[i].user);
                console.log(arr_users[i].passCode);
                login_form_message.innerText="Welcome "+arr_users[i].user;
                login_form_message.style.display="block";
                setTimeout(function(){
                    login_form.style.display="none"
                    search_form.style.display="block"

                    console.log(parent);
                    login_form_message.style.display="none";
                    // librarin_name.value="";
                    librarin_password.value="";
                },2000);
                
                
                return true;
            }
            else{
                login_form_message.innerText="Sorry Invaled Name / Password ";
                login_form_message.style.display="block";
                
            }

        }
    }

    searchBook(){
            console.log(this.librarian_name+ " is Verified User")
            let i ,flag=-1 ,index;
            for ( i = 0; i < arr_books.length; i++) {
                if( search.value==arr_books[i].book_name){
                     flag=1
                     index=i;
                     break;
                }
            }
            if (flag==-1){
                // console.log("Book Not Found __ Messege from searchBook function")
                return flag;
            }
            else if (flag ==1)
            {
                // console.log("Book Found __ Messege from searchBook function")
                return index;
            }
    }

    returnBook(book_name){
        let i=this.searchBook()
        console.log(i)
        if (i == (-1)){
            console.log("Book Not Found __ Messege from return book function")
        }
        else{
            
            data.innerHTML=`
                     <p>Book ID : ${arr_books[i].book_id}</P>
                     <p>Book Name : ${arr_books[i].book_name}</P>
                     <p>Book Author : ${arr_books[i].author}</P>
                     <p>Book Status : ${arr_books[i].book_status}</P>
                     <p>Date of purchase : ${arr_books[i].date_of_purchase}</P>
                     <p>Book Edition : ${arr_books[i].edition}</P>
                     <p>NO. of available copies : ${arr_books[i].no_of_available_copies}</P>
                     <p>Price : ${arr_books[i].price} LE</P>
                     `
                     return i;
        }
    }

    createBill(){
        let i=this.searchBook();
        console.log(i)
        let bill=new Bill();
        book_name.value=arr_books[i].book_name+" Book";
        bill_no.value=Bill.bill_no;
        date.value="22-12-2022";
        price.value=arr_books[i].price+ " LE";

    }

}



// let user=new Librarian("omar",789);
// aly.verifyMember()
// aly.searchBook("HTML")


// user.returnBook("JS");
/////////////////////////////////// bill /////////////////////

class Bill {
    static bill_no=0; 
    
    constructor(date,member_id,amount){
        Bill.bill_no++ ;
        this.date=date;
        this.member_id=member_id;
        this.amount=amount;
    }


}




///////////////////////////////////////// Member Record ///////////////////////////

class Member {
    constructor(member_id,type,member_name,addres,phone_no){
        this.member_id=member_id;
        this.type=type;
        this.member_name=member_name;
        this.addres=addres;
        this.phone_no=phone_no;
    }


}


/////////////////////////////////  //////////////////////////////

let user=new Librarian();

search_btn.addEventListener("click", ()=>{
    user.returnBook();
   
})

clear.addEventListener("click", ()=>{
    data.innerHTML="";
    search.value="";
})

login_btn.addEventListener("click", ()=>{
    user.verifyMember();

    
})


confirm.addEventListener("click", ()=>{
    
    alert("Thank you successful operation")

    
})

add_to_bill_btn.addEventListener("click", ()=>{

    search_form.style.display="none";
    bill_form.style.display="block";
    user.createBill();

})
