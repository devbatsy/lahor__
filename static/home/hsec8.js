import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"


__SYD.hsec8_static_overlay_image = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'30px',background:'transparent',flexDirection:'row',justifyContent:'center', flexWrap:'wrap',columnGap:'10px'}})
        },
        [
            // __SYD.text_lib_type_h1_glob({cnt:"Choose Your Apartment Type",size:__p(['hsec8_static_overlay_image','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),
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
                            style:`position:absolute;top:0;left:0;height:80%;width:70%;background-image:url("../assets/a1.jpg");background-position:center 0;opacity:${__p(['hsec8_static_overlay_image','animate'],false) ? '1' : '0'}`,
                            class:`thin_border ${__p(['hsec8_static_overlay_image','animate'],false) ? 'downSlide_animate' : ''}`
                        },[],{genericStyle:['bg_cover']}
                    ),
                    __c(
                        'div',
                        {
                            style:`position:absolute;top:50%;left:20%;height:calc(100% - 50%);animation-delay:.3s;width:calc(100% - 20%);background-image:url("../assets/a3.jpg");background-position:center 0;opacity:${__p(['hsec8_static_overlay_image','animate'],false) ? '1' : '0'}`,
                            class:`thin_border ${__p(['hsec8_static_overlay_image','animate'],false) ? 'topSlide_animate' : ''}`
                        },[],{genericStyle:['bg_cover']}
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:'height:80vw;max-height:400px;min-height:300px;min-width:300px;text-align:center;animation-duration:1s;' + __sC['page3FloatText']({method:'add',style:{justifyContent:'flex-start',padding:'unset',opacity:__p(['hsec8_static_overlay_image','animate'],false) ? '1' : '0'}}),
                    class:`hsec8_static_overlay_image_child2 ${__p(['hsec8_static_overlay_image','animate'],false) ? 'right_incoming_css_animation_custom_slider' : ''}`
                },
                [
                    __c(
                        'div',
                        {
                            style:`font-size:${__p(['hsec8_static_overlay_image','font'],'40px') === '40px' ? '50px' : '25px'};font-weight:700;padding:5px;text-align:left;width:100%;color:#b99d75`
                        },
                        [
                            'Welcome to Lahor Luxury Apartments'
                        ]
                    ),
                    __c(
                        'p',
                        {
                            style:'font-size:18px;padding:5px;text-align:left;width:100%;'
                        },
                        [
                            `Welcome to Lahor Luxury Apartments, where comfort meets sophistication in the heart of Abuja. Our establishment is designed to offer a seamless blend of luxury and convenience, whether you’re here for a brief getaway or an extended stay. Experience the ultimate in relaxation and service, tailored to fit your every need.`
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
                stateName:'hsec8_static_overlay_image',
                state:{font:'40px',animate:false,init_count:() =>{
                    const state = __g('hsec8_static_overlay_image');
                    state.animate = true;
                    __u('hsec8_static_overlay_image' , {type:'a' , value:state})
                }}
            }
        }
    )
}