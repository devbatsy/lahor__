import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"


__SYD.asec3_static_overlay_image = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'50px',background:'transparent',flexDirection:'row',justifyContent:'center',flexWrap:'wrap',columnGap:'10px'}})
        },
        [
            // __SYD.text_lib_type_h1_glob({cnt:"Choose Your Apartment Type",size:__p(['asec3_static_overlay_image','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),
            __c(
                'div',
                {
                    style:'height:80vw;max-height:500px;min-height:400px;min-width:300px;position:relative',
                    class:'hsec8_static_overlay_image_child1'
                },
                [
                    __c(
                        'div',
                        {
                            style:`position:absolute;top:0;left:0;height:80%;width:70%;background-image:url("../assets/a2.jpg");background-position:center 0;`,
                            class:'thin_border'
                        },[],{genericStyle:['bg_cover']}
                    ),
                    __c(
                        'div',
                        {
                            style:`position:absolute;top:50%;left:20%;height:calc(100% - 50%);width:calc(100% - 20%);background-image:url("../assets/a3.jpg");background-position:center 0;`,
                            class:'thin_border'
                        },[],{genericStyle:['bg_cover']}
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:'height:fit-content;min-height:300px;min-width:300px;text-align:center;' + __sC['page3FloatText'](),
                    class:'hsec8_static_overlay_image_child2'
                },
                [
                    __c(
                        'div',
                        {
                            style:`font-size:${__p(['asec3_static_overlay_image','font'],'40px') === '40px' ? '50px' : '25px'};font-weight:700;padding:5px;text-align:${__p(['asec3_static_overlay_image','font'],'40px') === '40px' ? 'left' : 'left'};width:100%;color:#b99d75;`
                        },
                        [
                            'Why choose us'
                        ]
                    ),
                    __c(
                        'p',
                        {
                            style:`font-size:16px;padding:5px;text-align:${__p(['asec3_static_overlay_image','font'],'40px') === '40px' ? 'left' : 'left'};width:100%;line-height:25px;`
                        },
                        [
                            `At Lahor Hotel and Shortlet Apartments, we stand out for our commitment to exceptional service and unparalleled comfort. Choose us for our thoughtfully designed accommodations that blend luxury with home-like convenience. Enjoy our prime location, which offers easy access to Abuja's top attractions and dining options. Our attentive staff is dedicated to ensuring your stay is seamless and enjoyable, providing personalized service tailored to your needs. With modern amenities, stylish furnishings, and a warm, welcoming atmosphere, Lahor is your ultimate choice for a memorable stay.`
                        ]
                    )
                ]
            )
        ],
        {
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            },
            createState:{
                stateName:'asec3_static_overlay_image',
                state:{font:'40px'}
            }
        }
    )
}