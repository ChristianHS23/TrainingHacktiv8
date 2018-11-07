function shoppingTime(memberId, money) {
    var tempBuyList=[]
    // you can only write your code here!
    if(!memberId)
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    else if(money<50000)
        return 'Mohon maaf, uang tidak cukup'
    var toko= new Object()
        toko.memberId=memberId
        toko.money=money
        toko.listpurchase=[ 'Sepatu Stacattu',
                'Baju Zoro',
                'Baju H&N',
                'Sweater Uniklooh',
                'Casing Handphone' ]
        toko.listHarga=[1500000, 500000, 250000, 175000, 50000]

    var changeMoney=money
        for(var i=0;i<toko.listpurchase.length;i++){
            if(changeMoney>=toko.listHarga[i]){
                changeMoney -= toko.listHarga[i]
                tempBuyList.push(toko.listpurchase[i])
            }
        }
    var customer=new Object
        customer.memberId=memberId
        customer.money=money
        customer.listpurchase=tempBuyList
        customer.changeMoney=changeMoney

        return customer
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja