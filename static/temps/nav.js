import { __SYD, __c, __g, __u, __v , __p, __sS , __sC } from '../../sydneyLib/sydneyDom.js'

__sS([
    {
        nameTag:'flexType',
        style:{
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center'
        }
    },
    {
        nameTag:'bg',
        style:{
            backgroundPosition:'center',
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat'
        }
    },
    {
        nameTag:'menuBox',
        style:{
            minHeight:'25px',
            minWidth:'25px',
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
            cursor:'pointer',
            fontSize:'18px',
        }
    },
])

__SYD.scroll_to_top = () =>{
    return __c(
        'div',
        {
            style:"position:fixed;bottom:20px;right:20px;height:50px;width:40px;border:2px solid #fff;cursor:pointer;display:none;justify-content:center;align-items:center;overflow:hidden;",
            class:'scroll_to_top'
        },[
            __c(
                'i',
                {
                    style:'font-size:20px;color:#fff;z-index: 300;',
                    class:"fa-solid fa-arrow-up"
                }
            )
        ],{
            type:'scroll',
            events:{
                onclick:(e) =>{
                    __v['navBar'].scrollIntoView();
                }
            }
        }
    )
}

addEventListener('scroll' , () =>{
    if(window.scrollY > window.innerHeight/2)
    {
        __v['scroll'].style.display = 'flex'
    }else{
        __v['scroll'].style.display = 'none'
    }
})


__SYD.contactMessage = () =>{
    // togContactTabs = () =>{
    //     const contactMessage = __g('contactMessage');
        
    //     contactMessage.current = contactMessage.current === 0 ? 1 : 0

    //     __u('contactMessage', {type:"a",value:contactMessage})
    // }
    return __c(
        'div',
        {
            style:'height:fit-content;width:200px;position:fixed;left:20px;bottom:20px;display:flex;justify-content:center;column-gap:8px;align-items:center;padding:0 10px;z-index:900;align-self:flex-end;',
            class:'contactMessage'//get this
        },
        [
            __c('div',{style:`transition:all .3s linear;transform:rotateZ(${__p(['contactMessage','current'],0) * 180}deg);height:40px;width:40px;min-height:40px;z-index:9999;min-width:40px;border-radius:50%;background:#b99d75;cursor:pointer;`+__sC.bg({method:'add',style:{backgroundImage:__p(['contactMessage','current'],0) === 0 ? `url("../assets/chat.png")` : `url("../assets/exit.png")`,backgroundSize:'80%'}}),}),//onclick:'togContactTabs()',
            __c(
                'div',
                {
                    style:'height:fit-content;position:relative;width:100%;z-index:200;',
                },
                [
                    __SYD.contactText(),
                    __SYD.contactIcons()
                ]
            ),
        ],{
            createState:{
                stateName:'contactMessage',
                state:{current:0}
            },
            events:{
                onclick:() =>{
                    const contactMessage = __g('contactMessage');
            
                    contactMessage.current = contactMessage.current === 0 ? 1 : 0
            
                    __u('contactMessage', {type:"a",value:contactMessage})
                }
            },
            type:'contactMessage'
        }
    )
}

__SYD.contactText = () =>{
    return __c(
        'p',
        {
            style:`font-weight:700;text-transform:capitalize;background:#b99d75;border-radius:10px;cursor:pointer;display:${__p(['contactMessage','current'],0) === 0 ? 'flex' : 'none'}`,
            class:'animateEntrance_opacity spook'
        },
        [__c('p',{style:'padding:10px;height:100%;width:100%;background:#b99d75;border-radius:inherit;z-index:200;font-size:14px'},['contact us'])],
        {
            createState:{
                stateName:'contactText',
                state:{d:'block'}
            },
            type:'contactText'
        }
    )
}

__SYD.contactIcons = () =>{
    return __c(
        'div',
        {
            style:'height:fit-content;width:100%;background:unset;position:absolute;top:50%;z-index:100;'+__sC.flexType({method:'add',style:{justifyContent:'flex-start',columnGap:'5px',display:`${__p(['contactMessage','current'],0) === 1 ? 'flex' : 'none'}`}}),
            class:'animateEntrance'
        },
        [
            __c('div',{style:__sC.menuBox({method:'add',style:{height:'40px',width:'40px',animationDuration:'.8s',zIndex:'100'}}) + __sC.bg({method:'add',style:{backgroundImage:`url("../assets/phone.png")`}}),class:'mainPanelXEntrance'}),
            __c('div',{style:__sC.menuBox({method:'add',style:{height:'40px',width:'40px',zIndex:'100'}})  + __sC.bg({method:'add',style:{backgroundImage:`url("../assets/whatsapp.png")`}}),class:''}),
        ]
    )
}

__SYD.loader_page = () =>{
    return __c(
        'div',
        {
            style:'min-height:100vh;min-width:100vw;background:#fff;display:flex;position:fixed;z-index:999999;justify-content:center;align-items:center;'
        },
        [
            __c(
                'div',
                {
                    style:`min-height:100px;min-width:100px;background-image:url("../assets/logo.png")`,
                    href:'/'
                },[],{genericStyle:['bg_cover']}
            )
        ],
        {
            type:'loader_page'
        }
    )
}

window.addEventListener('load' , () =>{
    setTimeout(() => {
            __v['loader_page'].style.display = 'none'
    }, 500);
})