(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(151),d=a(163),l=a(142),c=a(164),u=a.n(c),A=function(){return s.a.createElement(l.StaticQuery,{query:"1553495263",render:function(e){return s.a.createElement(u.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:d})},f=a(149),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(o.a,null,s.a.createElement(f.a,{title:"Home",keywords:["gatsby","application","react"]}),s.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},s.a.createElement(A,null)))},t}(s.a.Component);t.default=p},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(141),d=a.n(o);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(143),c=a.n(l);a.d(t,"PageRenderer",function(){return c.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var A=r.a.createContext({}),f=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},143:function(e,t,a){var i;e.exports=(i=a(145))&&i.default||i},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},145:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(52),d=a(2),l=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";var i=a(150),r=a(0),n=a.n(r),s=a(4),o=a.n(s),d=a(152),l=a.n(d),c=a(142);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return n.a.createElement(c.StaticQuery,{query:A,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="1025518380"},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},151:function(e,t,a){"use strict";var i=a(144),r=a(0),n=a.n(r),s=a(4),o=a.n(s),d=a(142),l=(a(146),function(){return n.a.createElement("div",{className:"menu_desktop"},c.map(function(e){return n.a.createElement("div",null,n.a.createElement(d.Link,{to:e},n.a.createElement("a",{href:e},e.charAt(0).toUpperCase()+e.slice(1))))}))}),c=["servicios","equipo","eventos","contacto"];l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var u=l,A=(a(147),a(148),function(e){var t=e.children;return n.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,null),n.a.createElement("div",null,t,n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})});A.propTypes={children:o.a.node.isRequired};t.a=A},163:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgT/2gAMAwEAAhADEAAAAX8Ra2d5IWf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDERL/2gAIAQEAAQUCWklayOxM9PnT/8QAFxEAAwEAAAAAAAAAAAAAAAAAABEhEv/aAAgBAwEBPwFSmT//xAAXEQEAAwAAAAAAAAAAAAAAAAAAERJR/9oACAECAQE/AZxZ/8QAGBAAAwEBAAAAAAAAAAAAAAAAACExASD/2gAIAQEABj8CgmTeP//EABoQAQEAAgMAAAAAAAAAAAAAAAEAESExQZH/2gAIAQEAAT8h7S8uGFW2kJwcSr//2gAMAwEAAgADAAAAEEDP/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EA4Yf//EABYRAQEBAAAAAAAAAAAAAAAAAAEREP/aAAgBAgEBPxCqmH//xAAbEAEAAwEAAwAAAAAAAAAAAAABABExIYGh0f/aAAgBAQABPxB1aEFMXkNYg00PPUA3+T7MyuwAIDaJan//2Q==",aspectRatio:1.6232785428698355,src:"/static/f191e761abc0cc19d49c68dbaa6de202/ca4e2/wedding_img.jpg",srcSet:"/static/f191e761abc0cc19d49c68dbaa6de202/fbb42/wedding_img.jpg 175w,\n/static/f191e761abc0cc19d49c68dbaa6de202/d4326/wedding_img.jpg 350w,\n/static/f191e761abc0cc19d49c68dbaa6de202/ca4e2/wedding_img.jpg 700w,\n/static/f191e761abc0cc19d49c68dbaa6de202/94e62/wedding_img.jpg 1050w,\n/static/f191e761abc0cc19d49c68dbaa6de202/85375/wedding_img.jpg 1400w,\n/static/f191e761abc0cc19d49c68dbaa6de202/b6434/wedding_img.jpg 2100w,\n/static/f191e761abc0cc19d49c68dbaa6de202/ca9fe/wedding_img.jpg 7308w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},164:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(51)),o=i(a(153)),d=i(a(154)),l=i(a(0)),c=i(a(4)),u=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+d+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return l.default.createElement("img",(0,d.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:d,seenBefore:o},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,w=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),S=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),v={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&l.default.createElement(m,(0,d.default)({src:j.base64},v)),j.tracedSVG&&l.default.createElement(m,(0,d.default)({src:j.tracedSVG},v)),E&&l.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,j.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),l.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),l.default.createElement(m,{alt:a,title:t,src:j.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:a,title:t},j))}}))}if(h){var R=h,x=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete x.display,l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&l.default.createElement(m,(0,d.default)({src:R.base64},v)),R.tracedSVG&&l.default.createElement(m,(0,d.default)({src:R.tracedSVG},v)),E&&l.default.createElement(b,{title:t,style:{backgroundColor:E,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&l.default.createElement("picture",null,R.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),l.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),l.default.createElement(m,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(l.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-da1d37726e4f53ba6345.js.map