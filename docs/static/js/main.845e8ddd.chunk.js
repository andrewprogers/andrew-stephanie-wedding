(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/leafCompressed.48ed62b4.png"},,,,function(e,t,a){e.exports=a.p+"static/media/details.b7b77c4f.jpg"},function(e,t,a){e.exports=a.p+"static/media/giftsLarge.acbfebe0.jpg"},function(e,t,a){e.exports=a.p+"static/media/rsvp.074c114b.jpg"},function(e,t,a){e.exports=a.p+"static/media/announcement.1dfc7e9e.jpg"},function(e,t,a){e.exports=a.p+"static/media/explore.aafdb53f.jpg"},function(e,t,a){e.exports=a.p+"static/media/acornCompressed.47ac41e8.png"},function(e,t,a){e.exports=a.p+"static/media/redwoods.94674441.jpg"},function(e,t,a){e.exports=a.p+"static/media/bocce.6a63db39.jpg"},function(e,t,a){e.exports=a.p+"static/media/lake.01f99a2c.jpg"},,,function(e,t,a){e.exports=a(40)},,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),i=(a(36),a(18)),c=a(1),o=a(2),m=a(4),d=a(3),h=a(6),u=a(5),p=(a(37),a(19)),g=a.n(p),f=a(20),b=a.n(f),E=a(21),w=a.n(E),v=a(22),y=a.n(v),k=a(23),N=a.n(k),S=function(e){switch(e){case"Announcement":return y.a;case"Details":return g.a;case"RSVP":return w.a;case"Gifts":return b.a;case"Explore":return N.a}},x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={previousImagePage:"Details",frontOpacity:1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.selectedPage!=e.selectedPage)this.setState({previousImagePage:e.selectedPage,frontOpacity:0});else if(this.state.frontOpacity<1){var n=this.state.frontOpacity+1/30;setTimeout(function(){a.setState(Object.assign(a.state,{frontOpacity:n}))},500/30)}else this.state.frontOpacity>1&&this.setState({previousImagePage:null,frontOpacity:1})}},{key:"render",value:function(){var e=r.a.createElement("img",{src:S(this.state.previousImagePage),className:"rear"}),t=r.a.createElement("img",{src:S(this.props.selectedPage),className:"front",style:{opacity:this.state.frontOpacity}});return r.a.createElement("div",{id:"ImagePanel"},r.a.createElement("div",null,e,t))}}]),t}(n.Component),O=a(7),P=a.n(O),j=function(e){var t=e.text,a=e.selectedPage,n=e.selectPage;return r.a.createElement("span",{onClick:function(){return n(t)},className:a===t?"selected":""},t)},C=function(e){var t=e.visible,a=e.selectedPage,n=e.selectPage;return 1==t?r.a.createElement("div",{id:"SidebarMenu"},r.a.createElement(j,{text:"Details",selectedPage:a,selectPage:n}),"|",r.a.createElement(j,{text:"RSVP",selectedPage:a,selectPage:n}),"|",r.a.createElement(j,{text:"Gifts",selectedPage:a,selectPage:n}),"|",r.a.createElement(j,{text:"Explore",selectedPage:a,selectPage:n})):null},T=function(e){var t=e.title,a=e.item,n=e.description;return r.a.createElement("div",{className:"DetailItem"},r.a.createElement("p",null,r.a.createElement("span",{className:"title"},t),a.length>0?": ":"",r.a.createElement("span",{className:"item"},a),r.a.createElement("br",null),r.a.createElement("span",{className:"description"},r.a.createElement("em",null,n))))},R=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new window.mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v9",center:[-122.9474,38.408261],zoom:15,minZoom:9,maxZoom:16}),t=document.createElement("div");t.className="marker",new window.mapboxgl.Marker(t).setLngLat([-122.9474,38.408261]).addTo(e),console.log(e)}},{key:"render",value:function(){Math.random();return r.a.createElement("div",{id:"Details",className:"text-left"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"serifText"},"We're getting married and you're invited to our celebration!")),r.a.createElement("br",null),r.a.createElement(T,{title:"Who",item:"Andrew and Stephanie",description:"We met hiking the John Muir Trail through the Sierras in September of 2016. Our wedding date of September 14th will mark 3 years to the day of when we met on trail!"}),r.a.createElement(T,{title:"Where",item:"The Union Hotel",description:" Occidental, California is a wonderful little town with an outdoor amphitheater in the redwoods for our ceremony.  There is no parking at the amphitheater so we will shuttle guests from the hotel parking lot nearby.  The site has uneven ground so we recommend appropriate footwear!"}),r.a.createElement(T,{title:"Address",item:"3731 Main Street, Occidental, CA",description:"Meet and park here for the ceremony shuttle"}),r.a.createElement(T,{title:"When",item:"5:00PM on Saturday, September 14th",description:"Please arrive between 4:00-4:45PM to allow time for shuttling everyone to the amphitheater"}),r.a.createElement(T,{title:"Reception",item:"",description:"An appetizer will be served following the ceremony before guests are shuttled back to the Hotel. A family style Italian dinner will be served at the hotel ballroom followed by cake and dancing until 10:30. Night owls are welcome to join us at the hotel bar for some after party drinks."}),r.a.createElement(T,{title:"Getting There",item:"",description:"San Francisco and Oakland airports are closest and Sacramento is a third option.  Unfortunately, Occidental is not accessible by public transit so you'll need access to a car. Please indicate on the RSVP form if you would be interested in carpooling or sharing a rental car with another guest."}),r.a.createElement(T,{title:"Lodging",item:"",description:"The Inn at Occidental is a nearby affordable option. There are also several Airbnb's in town. More options are located in the nearby cities of Sebastopol and Santa Rosa. "}),r.a.createElement("div",{className:"mapContainer"},r.a.createElement("div",{id:"map"})))}}]),t}(r.a.Component),I=a(11),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={name:"",attending:null,partySize:1,email:"",carpool:!1,message:"",comments:"",formErrors:[]},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"==t.type?t.checked:e.target.value;switch(t.type){case"checkbox":a=t.checked;break;case"radio":a="true"==t.value;break;default:a=t.value}var n="radio"==t.type?t.name:t.id,r=Object.assign({},this.state,Object(I.a)({},n,a));this.setState(r)}},{key:"validateForm",value:function(){var e=[];return null!=this.state.name&&""!=this.state.name||e.push({field:"name",message:"Please enter your name"}),!this.state.attending||null!=this.state.email&&""!=this.state.email||e.push({field:"email",message:"Please enter your email address"}),e}},{key:"handleSubmit",value:function(e){var t=this,a=this.validateForm();if(0==a.length){var n=Object.assign({},this.state);delete n.formErrors;window.Pageclip.send("suN4vnVtLl4aEdJcczLvjYstVtjxAzeX","default",n,function(e,a){t.props.recordFormSubmission(t.state.attending)})}else{var r=Object.assign({},this.state,{formErrors:a});this.setState(r)}}},{key:"render",value:function(){if(1==this.props.formSubmitted){var e=this.props.attending?"We look forward to celebrating with you":"We're sorry you won't be able to make it";return r.a.createElement("div",{id:"Rsvp"},r.a.createElement("h4",{className:"serifText text-center"},"Thank you for your RSVP"),r.a.createElement("br",null),r.a.createElement("h6",{className:"serifText text-center"},e))}var t=null;null!=this.state.attending&&(t=r.a.createElement("div",{className:"myButton serifText",onClick:this.handleSubmit},this.state.attending?"RSVP":"Submit"));var a=this.state.formErrors.map(function(e){return r.a.createElement("li",{className:"error"},r.a.createElement("i",null,e.message))}),n=null;return a.length>0&&(n=r.a.createElement("div",{className:"formErrors"},r.a.createElement("h6",{className:""},"We need just a bit more info:"),r.a.createElement("ul",null,a))),r.a.createElement("div",{id:"Rsvp"},r.a.createElement("form",{action:"https://send.pageclip.co/suN4vnVtLl4aEdJcczLvjYstVtjxAzeX",id:"rsvp-form",className:"pageclip-form",method:"post"},r.a.createElement("h3",{className:"text-center serifText"},"We hope you can join us!"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name(s)",placeholder:"Name(s)",value:this.state.name,onChange:this.handleChange})),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"attending",id:"attendingYes",value:"true",checked:null!=this.state.attending&&this.state.attending,onChange:this.handleChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"attendingYes"},"I'll be there!")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"attending",id:"attendingNo",value:"false",checked:null!=this.state.attending&&!this.state.attending,onChange:this.handleChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"attendingNo"},"I can't make it")),r.a.createElement("div",{id:"attendingOnly",className:"attendingDependent"+(this.state.attending?"":" hidden")},r.a.createElement("h5",{className:"text-center serifText"},"Wonderful, We're so glad you can join us!"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"partySize"},"How many total in your party?"),r.a.createElement("input",{type:"number",className:"form-control",id:"partySize",name:"partySize",placeholder:"",value:this.state.partySize,onChange:this.handleChange}),r.a.createElement("small",{id:"partyHelp",className:"form-text"},"If you'd like to bring a guest (or children) not listed on your invite, please check with us first.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email","aria-describedby":"emailHelp",placeholder:"wedding@guest.com",value:this.state.email,onChange:this.handleChange}),r.a.createElement("small",{id:"emailHelp",className:"form-text"},"Just in case we need to share more details.")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"carpool",name:"carpool",value:this.state.carpool,onChange:this.handleChange}),r.a.createElement("label",{className:"form-check-label",htmlFor:"carpool"},"Are you interested in carpooling to Occidental?")),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"comments"},"Anything else?"),r.a.createElement("textarea",{className:"form-control",id:"comments",name:"comments",placeholder:"Dietary or other needs? Just want to leave us a note?",value:this.state.comments,onChange:this.handleChange,rows:"3"}))),r.a.createElement("div",{id:"notAttendingOnly",className:"attendingDependent"+(null==this.state.attending||this.state.attending?" hidden":"")},r.a.createElement("h5",{className:"text-center serifText"},"We're sorry you can't come!"),r.a.createElement("br",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"message"},"Would you like to leave us a message?"),r.a.createElement("textarea",{className:"form-control",id:"message",name:"message","aria-describedby":"messageHelp",placeholder:"",value:this.state.message,onChange:this.handleChange,rows:"5"}))),n,t))}}]),t}(r.a.Component),L=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Gifts",className:"text-left"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"serifText"},"Wedding Gifts")),r.a.createElement("p",null,"Below is a link to our registry where we have compiled a small number of physical gifts along with our honeymoon fund. While we know it is tradition to bring a physical gift to a wedding, we are not in need of much and are also traveling across the country for the occasion."),r.a.createElement("div",{className:"registryLink text-center"},r.a.createElement("a",{href:"http://www.zola.com/registry/andrewandstephanieseptember14",target:"_blank"},r.a.createElement("span",{className:""},"Our Registry"))),r.a.createElement("br",null),r.a.createElement("p",null,"There will be a basket for cards available, but if you'd like to gift us something, please have it sent to our address in Boston:"),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:"address text-left"},r.a.createElement("hr",null),r.a.createElement("em",null,"Andrew Rogers & Stephanie Springer",r.a.createElement("br",null),"11 Sheridan St #3",r.a.createElement("br",null),"Jamaica Plain, MA 02130"),r.a.createElement("hr",null))),r.a.createElement("br",null),r.a.createElement("p",null,"The greatest gift will truly be getting all of our wonderful friends and family in the same area."))}}]),t}(r.a.Component),M=a(15),W=a.n(M),D=a(24),F=a.n(D),V=function(e){var t=e.selectPage,a=Math.random(),n=["Andrew Paul Rogers","Stephanie Rose Springer"],s=a>.5?n[0]:n[1],l=a>.5?n[1]:n[0];return r.a.createElement("div",{id:"Announcement"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,r.a.createElement("span",{className:"name"},s),r.a.createElement("br",null),r.a.createElement("span",{className:"and"},"and"),r.a.createElement("br",null),r.a.createElement("span",{className:"name"},l))),r.a.createElement("div",{id:"divider"},r.a.createElement("img",{src:W.a,className:"leaf left"}),r.a.createElement("img",{src:F.a,className:"acorn"}),r.a.createElement("img",{src:W.a,className:"leaf right"})),r.a.createElement("span",{className:"weddingDate serifText"},"09 \u2022 14 \u2022 19"),r.a.createElement("p",null,r.a.createElement("span",{className:"myButton",onClick:function(){t("Details")}},"More Information")))},_=a(25),z=a.n(_),B=a(26),H=a.n(B),G=a(27),J=a.n(G),U=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Explore",className:"text-left"},r.a.createElement("h3",{className:"serifText text-center"},"Things to do in Sonoma"),r.a.createElement("p",null,"Of all of the places we could have chosen to get married, we were most excited for Sonoma County where Stephanie grew up. If you make it out to our wedding, we hope you take advantage of your time in this beautiful area! Below are some suggestions for places and spaces that are meaningful to us."),r.a.createElement("h5",{className:"serifText"},'"The Drive"'),r.a.createElement("p",null,"This day trip has been taken so frequently that it gets it's own name and space here. Any piece is wonderful on its own, or take a day to really see the scenery."),r.a.createElement("img",{src:z.a,className:""}),r.a.createElement("ul",null,r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://www.sonomacounty.com/wineries/korbel-champagne-cellars",target:"_blank",className:"tripLink"},"Korbel Champagne Cellars")," - Tasting, tours, and a cafe"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://www.parks.ca.gov/?page_id=450",target:"_blank",className:"tripLink"},"Armstrong Redwoods")," - State park with wonderful trails through the redwoods"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"http://www.duncansmills.net/",target:"_blank",className:"tripLink"},"Duncans Mills")," - Shops and restaurant"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://www.sonomacounty.com/articles/highlights-sonoma-coast",target:"_blank",className:"tripLink"},"The Sonoma Coast")," - Many stops as you head south down Route 1. We recommend Goat Rock and Salmon Creek beaches, and the pink and white striped salt water taffy store. The Tides is another iconic gift store and restaurant stop."),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://www.google.com/maps/place/Sebastopol,+CA+95472/data=!4m2!3m1!1s0x808424cd76e3686f:0x2b7bf31174c69208?sa=X&ved=2ahUKEwj_tZu7vPTiAhUBT98KHcgRCf8Q8gEwFnoECA0QBA",target:"_blank",className:"tripLink"},"Bodega and Sebastopol")," - You'll cut East on Bodega Hwy to head back towards Santa Rosa. Hitchcock fans can visit sites used in 'The Birds' in Bodega"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"http://www.screaminmimisicecream.com/",target:"_blank",className:"tripLink"},"Screamin' Mimis")," - End the road trip with the best ice cream around! Located in Sebastopol, this is a wonderful small-town ice cream shop")),r.a.createElement("h5",{className:"serifText"},'"Wine" Tasting'),r.a.createElement("p",null,"What is a visit to Sonoma without wine? There are hundreds of wineries to visit. Our favorites include:"),r.a.createElement("img",{src:H.a,className:""}),r.a.createElement("ul",null,r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://www.hookandladderwinery.com/",target:"_blank",className:"tripLink"},"Hook & Ladder")," - Mostly for the outdoor bocci court!"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://www.chateaustjean.com/",target:"_blank",className:"tripLink"},"Chateau St Jean")," - For the scenery and other Kenwood Wineries"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://russianriverbrewing.com/",target:"_blank",className:"tripLink"},"Russian River Brewery")," - If Beer is more your thing!")),r.a.createElement("h5",{className:"serifText"},"Other Sites"),r.a.createElement("img",{src:J.a,className:""}),r.a.createElement("ul",null,r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://schulzmuseum.org/",target:"_blank",className:"tripLink"},"The Charles Shultz Museum")," - A must-see for Peanuts fans (located in Santa Rosa)"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"http://parks.sonomacounty.ca.gov/Visit/Spring-Lake-Regional-Park/",target:"_blank",className:"tripLink"},"Spring Lake Park")," - Great place for a walk in Santa Rosa"),r.a.createElement("li",{className:"tripItem"},r.a.createElement("a",{href:"https://www.nps.gov/pore/index.htm",target:"_blank",className:"tripLink"},"Point Reyes National Seashore")," - Great area for exploration and day hikes")))}}]),t}(r.a.Component),Y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={formSubmitted:!1,attending:null},a.recordRSVP=a.recordRSVP.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"recordRSVP",value:function(e){this.setState({formSubmitted:!0,attending:e})}},{key:"render",value:function(){var e,t=!0;switch(this.props.selectedPage){case"Announcement":t=!1;break;case"Details":e=r.a.createElement(R,null);break;case"RSVP":e=r.a.createElement(A,{recordFormSubmission:this.recordRSVP,formSubmitted:this.state.formSubmitted,attending:this.state.attending});break;case"Gifts":e=r.a.createElement(L,null);break;case"Explore":e=r.a.createElement(U,null);break;default:e=r.a.createElement(R,null)}return 0==t?r.a.createElement(P.a,{id:"sidebarContainer"},r.a.createElement(V,{selectPage:this.props.selectPage})):r.a.createElement(P.a,{id:"sidebarContainer"},r.a.createElement("div",{id:"Sidebar"},r.a.createElement(C,{visible:t,selectedPage:this.props.selectedPage,selectPage:this.props.selectPage}),r.a.createElement("div",{id:"SidebarContent"},e)))}}]),t}(n.Component),K=a(28),X=a.n(K),Z=a(29),Q=a.n(Z),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={selectedPage:"Announcement"},a.selectPage=a.selectPage.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"selectPage",value:function(e){this.setState(Object(i.a)({},this.state,{selectedPage:e}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"photoCover"},r.a.createElement(X.a,{fluid:!0,id:"mainContainer"},r.a.createElement(Q.a,{noGutters:!0,id:"mainRow"},r.a.createElement(P.a,{xs:12,sm:12,md:6,lg:7,className:"heightCol"},r.a.createElement(x,{selectedPage:this.state.selectedPage})),r.a.createElement(Y,{selectedPage:this.state.selectedPage,selectPage:this.selectPage})))))}}]),t}(n.Component);a(39);l.a.render(r.a.createElement(q,null),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.845e8ddd.chunk.js.map