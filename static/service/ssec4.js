import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"
import "../temps/icon.js"

__SYD.ssec4_all_services_grid = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{background:"unset",rowGap:'10px'}})
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:"Our Amenites",size:__p(['asec2_top_text','font'],'40px'),clr:"#b99d75",w:'700',inject:"text-align:center;max-width:900px;padding:5px 15px;"}), 
             
            __SYD.ssec4_all_services_grid_design_tabs()
        ],
        {
            mediaQuery:{
                query:[{size:'<800px' , prop:{size_:'30px'}}],
                defState:{size_:'50px'}
            },
            createState:{
                stateName:'ssec4_all_services_grid',
                state:{size_:'50px'}
            }
        }
    )
}

__SYD.ssec4_all_services_grid_design_tabs = () =>{
    return __c(
        'div',
        {
            style:'height:fit-content;width:100%;display:flex;column-gap:15px;row-gap:20px;flex-wrap:wrap;background:#151719;padding:15px;justify-content:center'
        },
        [
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'Washing Machine' , i_class:'fa-solid fa-shirt'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'Fun Games' , i_class:'fa-solid fa-gamepad'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'High Speed Internet' , i_class:'fa-solid fa-wifi'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'Privacy And Security' , i_class:'fa-solid fa-shop-lock'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'24/7 Electricity' , i_class:'fa-solid fa-lightbulb'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'Water Heating system' , i_class:'fa-solid fa-temperature-arrow-up'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'Equiped Kitchenette' , i_class:'fa-solid fa-kitchen-set'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'Entertainment' , i_class:'fa-solid fa-tv'}),
            __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:'Treated Water' , i_class:'fa-solid fa-water'})

        ]
    )
}


__SYD.ssec4_all_services_grid_design_tabs_ind_tab = ({title = 'def title' , cnt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit' , i_class = ''} = {}) =>{
    return __c(
        'div',
        {
            style:'height:fit-content;width:fit-content;padding:50px 15px;display:flex;column-gap:20px;row-gap:20px;flex-direction:row;flex-direction:column;align-items:center;width:25%;min-width:200px;max-width:250px;' + __sC['border-rad-15'](),
            class:'all_class_hover'
        },
        [
            __SYD.iconify_50px({attr:i_class,clr:'#fff',inject:`min-height:${__p(['ssec4_all_services_grid','size_'],'50px')};min-width:${__p(['ssec4_all_services_grid','size_'],'50px')};font-size:${__p(['ssec4_all_services_grid','size_'],'50px')};`}),
            __SYD.text_lib_type_p_glob_vmax({cnt:title,size:'15px',clr:'#fff' , w:'500'}),
            // __SYD.text_lib_type_p_glob_vfit({cnt:cnt,clr:'#fff',w:'300',inject:'text-align:center'})
        ]
    )
}