(async ()=>{
    var a=1;
    var b=2;
    
//    syncTest().then(()=>{
    
//     let c=a+b;
//     console.log(c)
//    });
await syncTest()
        let c=a+b;
    console.log(c)
    
    function syncTest(){
        return new Promise((res)=>{
            setTimeout(()=>{
                a=8
                b=9
                res();
                console.log("a:"+a,"b:"+b)
            },1000)
        })
    }

})();