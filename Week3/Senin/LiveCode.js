/*
    STORE user with any value
    STORE role with any value
    IF 'user' Length String Greater Than 5
         IF 'role' EQUALS to 'Author' 
              DISPLAY 'Menu : Home,Logout,Create Article,Edit Own Article,Delete Own Article '
         ELSE IF 'role'EQUALS to'Editor'
             DISPLAY 'Menu : Home , Logout, Edit Article'
         ELSE
              DISPLAY 'Login failed'
    ELSE IF 'user' Length String EQUALS To 0 AND 'role' Length String EQUALS to 0
        DISPLAY 'Menu : Home, Login'
    ELSE 
        DISPLAY 'Login Failed'

*/

var user ='rasssa';
var role ='Editor';

if(user.length>=5){
    if(role=='Author'){
        console.log(user +' dapat mengakses menu ')
        console.log('-Home')
        console.log('-loguot')
        console.log('-creat article')
        console.log('-edit own article')
        console.log('-delete own article')
    }else if(role=='Editor'){
        console.log(user +' dapat mengakses menu ')
        console.log('-Home')
        console.log('-loguot')
        console.log('-edit article')
    }else{
        console.log("login failed")
    }
}else if(user==''&&role==''){
    console.log('Guest User dapat mengakses menu ')
    console.log('-Home')
    console.log('-loguot')
}else{
    console.log("login failed")
}

