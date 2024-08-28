import {
    createElement,
    sydDOM,
    preState,
    setStyle,
    styleComponent,
    __sC,
    __c,
    __p,
    __u,
    __g
} from '../../sydneyLib/sydneyDom.js'

sydDOM.hsec6_text_img_array = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.body1({
                method:'add',style:{rowGap:'80px',height:'fit-content',background:'transparent',paddingTop:'80px',paddingBottom:'20px',opacity:__p(['hsec6_text_img_array','animate'],false) ? '1' : '0'}
            })
        },
        [
            sydDOM.page3_child1({content:'Our apartments are designed to make you feel at home. Each unit features plush bedding with premium linens, ensuring restful nights and rejuvenated mornings. Stay connected with high-speed Wi-Fi and keep your clothes fresh with an in-apartment washer and dryer. For your added convenience, we provide complimentary toiletries, a coffee maker, and a work desk, catering to both relaxation and productivity.' , title:'Comfort and Convenience' , align:'left' , img:'a1.jpg' , delay:'0'}),
            sydDOM.page3_child1({content:'Step into our elegantly furnished apartments, where every detail has been considered to enhance your stay. Enjoy spacious living areas with contemporary décor, including comfortable seating, a flat-screen TV, and a fully equipped kitchenette. Cook your favorite meals with ease using top-of-the-line appliances, including a refrigerator, microwave, stovetop, and essential cookware.' , title:'Stylish and Fully Equipped' , align:'right' , img:'a6.jpg' , delay:'.5'}),
            sydDOM.page3_child1({content:'Located in the city of Abuja, our shortlet apartments offer easy access to local attractions, dining, and shopping. Experience the city’s pulse while enjoying a tranquil retreat back at your apartment. Whether you’re exploring nearby landmarks or relaxing after a busy day, our location provides the perfect balance of excitement and serenity.' , title:'Prime Location' , align:'left' , img:'a1.jpg' , delay:'1'}),
            // sydDOM.page3_child1({content:'Step into a world where luxury meets authenticity at Whitefield Luxury Apartments. Book your stay today and immerse yourself in the rich tapestry of coastal living, where every moment is infused with the allure of the sea and the promise of unforgettable experiences.' , title:'Sea Port Tour' , align:'left'}),
            // sydDOM.page3_child1({content:'Step into a world where luxury meets authenticity at Whitefield Luxury Apartments. Book your stay today and immerse yourself in the rich tapestry of coastal living, where every moment is infused with the allure of the sea and the promise of unforgettable experiences.' , title:'Sea Port Tour' , align:'right'}),
            // createElement(
            //     'div',
            //     {
            //         style:sydDOM.page3_child1().inherit(['attribute','style']),
            //         class:preState(['hsec6_text_img_array','show'],false) === false ? 'child_s_image_comp' : ''
            //     },
            //     [
            //         sydDOM.floatingText2(),
            //         createElement(
            //             'div',
            //             {
            //                 style:sydDOM.broadImg().inherit(['attribute','style'])
            //             }
            //         )
            //     ]
            // )
        ],
        {
            createState:{
                stateName:'hsec6_text_img_array',
                state:{show:false,animate:false,init_count:() =>{
                    console.log('here 6')
                    const state = __g('hsec6_text_img_array');
                    state.animate = true;
                    __u('hsec6_text_img_array' , {type:'a' , value:state})
                }}
            },
            mediaQuery:{
                query:[{size:'<750px' , prop:{show:true}}],
                defState:{show:false}
            }
        }
    )
}

sydDOM.page3_child1 = ({content,title,align,img = '',delay = '0'} = {}) =>{
    return createElement(
        'div',
        {
            style:`animation-delay:${delay}s;display:flex;height:fit-content;width:100%;flex-direction:column-reverse;position:relative;overflow-x:hidden;overflow-y:hidden`,
            class:`${__p(['hsec6_text_img_array','animate'],false) ? `${align === 'left' ? 'left_incoming_css_animation' : 'right_incoming_css_animation_custom_slider'}` : ''}`
            // class:preState(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? 'child_s_image_comp__left_compiment' : 'child_s_image_comp__right_compiment') : 'child_s_image_comp'
        },
        [
            sydDOM.floatingText({content,title,align}),
            sydDOM.broadImg({align:align , img:img})
        ]
    )
}

sydDOM.floatingText = ({content = '' , title = '' , align = 'left'} = {}) =>{
    return createElement(
        'p',
        {
            style:`z-index:10;min-height:${preState(['hsec6_text_img_array','show'],false) === false ? '100%' : '50%'};height:fit-content;width:${preState(['hsec6_text_img_array','show'],false) === false ? '50%' : '100%'};overflow-x:hidden;position:${preState(['hsec6_text_img_array','show'],false) === false ? 'absolute' : 'static'};top:0;${align == 'left' ? 'left:0;' : 'right:0;'}max-width:${preState(['hsec6_text_img_array','show'],false) === false ? '400px' : 'unset'};background:#151719;${align === 'left' ? 'border-top-right-radius:25px;' :'border-top-left-radius:25px;'}border-${align === 'left' ? 'right' : 'left'}:2px solid #b99d75;transform:translateX(${align === 'left' ? '-5px' : '5px'});box-shadow:1px 0 5px #000;`+styleComponent.page3FloatText(),
        },
        [
            createElement(
                'div',
                {
                    style:'font-size:25px;font-weight:900;padding:5px;color:#b99d75'
                },
                [
                    title
                ]
            ),
            createElement(
                'p',
                {
                    style:'font-size:16px;text-align:left;padding-left:10px;line-height:25px;color:#fff;font-family:poppins;'
                },
                [
                    __c('span',{style:'font-size:30px;margin-right:5px'},['"']),
                    content,
                    __c('span',{style:'font-size:30px;margin-left:5px'},['"']),
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750',prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

sydDOM.floatingText2 = () =>{
    return createElement(
        'p',
        {
            style:`min-height:${preState(['floatingText2','h'],'100%')};height:fit-content;width:${preState(['floatingText2','h'],'100%') === '100%' ? '50%' : '100%'};overflow-x:hidden;position:${preState(['floatingText2','h'],'100%') === '100%' ? 'absolute' : 'static'};top:0;left:0;max-width:${preState(['floatingText2','h'],'100%') === '100%' ? '300px' : 'unset'};`+styleComponent.page3FloatText()
        },
        [
            createElement(
                'div',
                {
                    style:'font-size:25px;font-weight:900;padding:5px'
                },
                [
                    'Text Title : bla bla bla bla bla bla'
                ]
            ),
            createElement(
                'p',
                {
                    style:'font-size:18px'
                },
                [
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, incidunt officia. Inventore error debitis quidem omnis, voluptatem, fugit unde eum perferendis delectus reprehenderit ex, praesentium illum vero et suscipit deserunt?'
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText2',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750',prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

sydDOM.broadImg = ({align = '' , img} = {}) =>{
    return createElement(
        'div',
        {
            style:`height:100%;width:100%;min-height:400px;max-height:400px;background-position:${preState(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? '200px' : '-200px') : '0'} 0;background-image:url("../assets/${img}");border-radius:25px;border-width:1px;box-shadow:0 2px 5px #000 inset;`,
            class:'thin_border'
        },[],{
            events:{
                // onmouseover:(e) =>{
                //     e.target.classList.add('h_page_1_cont_large_image_custom')
                // },
                // onmouseout:(e) =>{
                //     e.target.classList.remove('h_page_1_cont_large_image_custom')
                // },
            },
            genericStyle:['bg_cover']
        }
    )
}