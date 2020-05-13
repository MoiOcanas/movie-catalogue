(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{47:function(e,t,a){e.exports=a(89)},52:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),i=(a(52),a(20)),l=a(21),s=a(24),u=a(23),m=a(15),p=a(7),v=a(11),f=a(30),d=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),i=Object(f.a)(o,2),l=i[0],s=i[1],u=function(){r(!a),s(!l)},m=a?"mobile-nav":null,v=l?"is-active":null;return c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("div",{className:"grad-bar"}),c.a.createElement("nav",{className:"navbar"},c.a.createElement(p.b,{to:"/"},c.a.createElement("span",{id:"app-brand"},"MOVIE APP"),c.a.createElement("i",{className:"fa fa-ticket","aria-hidden":"true"})),c.a.createElement("div",{className:"menu-toggle ".concat(v),onClick:u,id:"mobile-menu"},c.a.createElement("span",{className:"bar"}),c.a.createElement("span",{className:"bar"}),c.a.createElement("span",{className:"bar"})),c.a.createElement("ul",{className:"nav ".concat(m," no-search")},c.a.createElement("li",{className:"nav-item",onClick:u},c.a.createElement(p.b,{to:"/"},"Home")),c.a.createElement("li",{className:"nav-item",onClick:u},c.a.createElement(p.b,{to:"/about"},"About")),c.a.createElement("li",{className:"nav-item",onClick:u},c.a.createElement(p.b,{to:"/search"},"Search")))))},E=a(44),g=a.n(E),b=(a(69),function(e){return c.a.createElement(g.a,{showDots:!1,swipeable:!0,responsive:e.responsiveConfig,additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,containerClass:"container-with-dots",draggable:!0,focusOnSelect:!1,infinite:!0,slidesToSlide:1,keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1},e.children)}),h={superLargeDesktop:{breakpoint:{max:4e3,min:1025},items:1},desktop:{breakpoint:{max:1024,min:769},items:1},tablet:{breakpoint:{max:768,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},y=a(8),M=a.n(y),O=a(12),w=a.n(O),k={getPopularMoviesSuccess:function(e){return{type:"GET_MOVIES",payload:{popularMovies:e}}},getMovieSuccess:function(e){return{type:"GET_MOVIE",payload:{movie:e}}},getTopMoviesSuccess:function(e){return{type:"GET_TOP_MOVIES",payload:{topMovies:e}}},getMoviesReviewsSuccess:function(e){return{type:"GET_MOVIE_REVIEWS",payload:{movieReviews:e}}},getUpcomingMoviesSuccess:function(e){return{type:"GET_UPCOMING_MOVIES",payload:{upcomingMovies:e}}}},S="https://api.themoviedb.org/3/movie/",N="26b6f99577e56d992ffe47051578e1ac",j={getPopularMovies:function(){return function(e){return M.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.awrap(w.a.get("".concat(S,"popular?api_key=").concat(N,"&language=en-US&page=1")).then((function(t){var a=t.data.results;e(k.getPopularMoviesSuccess(a))})).catch((function(e){console.log(e)})));case 2:case"end":return t.stop()}}),null,null,null,Promise)}},getTopMovies:function(){return function(e){return M.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.awrap(w.a.get("".concat(S,"top_rated?api_key=").concat(N,"&language=en-US&page=1")).then((function(t){var a=t.data.results;e(k.getTopMoviesSuccess(a))})).catch((function(e){console.log(e)})));case 2:case"end":return t.stop()}}),null,null,null,Promise)}},getUpcomingMovies:function(){return function(e){return M.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.a.awrap(w.a.get("".concat(S,"upcoming?api_key=").concat(N,"&language=en-US&page=1")).then((function(t){var a=t.data.results;e(k.getUpcomingMoviesSuccess(a))})).catch((function(e){console.log(e)})));case 2:case"end":return t.stop()}}),null,null,null,Promise)}},getMovie:function(e){return function(t){return M.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M.a.awrap(w.a.get("".concat(S).concat(e,"?api_key=").concat(N,"&language=en-US")).then((function(e){var a=e.data;t(k.getMovieSuccess(a))})).catch((function(e){console.log(e)})));case 2:case"end":return a.stop()}}),null,null,null,Promise)}},getMovieReviews:function(e){return function(t){return M.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M.a.awrap(w.a.get("".concat(S).concat(e,"/reviews?api_key=").concat(N,"&language=en-US&page=1")).then((function(e){var a=e.data.results;t(k.getMoviesReviewsSuccess(a))})).catch((function(e){console.log(e)})));case 2:case"end":return a.stop()}}),null,null,null,Promise)}}},x=a(3),R=function(e){var t=e.movie;return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(p.b,{to:"/movie/".concat(t.id)},c.a.createElement("img",{className:"carousel-image",src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.poster_path),alt:t.title})))},_={superLargeDesktop:{breakpoint:{max:4e3,min:1025},items:5},desktop:{breakpoint:{max:1024,min:769},items:4},tablet:{breakpoint:{max:768,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:1}},T=function(){var e=Object(x.c)((function(e){return e.moviesReducer.popularMovies})),t=Object(x.b)();return Object(n.useEffect)((function(){t(j.getPopularMovies())}),[t]),c.a.createElement("div",null,c.a.createElement("h2",null,c.a.createElement("b",null,"Popular Movies")),c.a.createElement(b,{responsiveConfig:_},e&&e.map((function(e){return c.a.createElement(R,{key:e.id,movie:e})}))))},I=function(){var e=Object(x.c)((function(e){return e.moviesReducer.topMovies})),t=Object(x.b)();return Object(n.useEffect)((function(){t(j.getTopMovies())}),[t]),c.a.createElement("div",null,c.a.createElement("h2",null,c.a.createElement("b",null,"Top Ranked Movies")),c.a.createElement(b,{responsiveConfig:_},e&&e.map((function(e){return c.a.createElement(R,{key:e.id,movie:e})}))))},P=function(e){var t=e.upcomingMovies;return c.a.createElement("div",null,c.a.createElement("h2",null,c.a.createElement("b",null,"Upcoming Movies")),c.a.createElement(b,{responsiveConfig:_},t&&t.map((function(e){return c.a.createElement(R,{key:e.id,movie:e})}))))},C=function(){var e=Object(x.c)((function(e){return e.moviesReducer.upcomingMovies})),t=Object(x.b)();return Object(n.useEffect)((function(){t(j.getUpcomingMovies())}),[t]),c.a.createElement("div",{className:"main-carousel-container"},c.a.createElement(b,{responsiveConfig:h},e&&e.map((function(e){return c.a.createElement("div",{key:e.id,className:"main-element-container"},c.a.createElement("img",{style:{width:"100%"},key:e.id,alt:e.title,src:"https://image.tmdb.org/t/p/original"+e.backdrop_path}),c.a.createElement("div",{className:"top-right"},c.a.createElement("div",{className:"top-right-container"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.overview),c.a.createElement("div",{className:"text-center"},c.a.createElement(p.b,{to:"/movie/".concat(e.id)},"See details")))))}))),c.a.createElement("div",{className:"container main-container"},c.a.createElement(T,null),c.a.createElement("br",null),c.a.createElement(I,null),c.a.createElement("br",null),c.a.createElement(P,{upcomingMovies:e})))},G=function(e){var t=e.review;return c.a.createElement("div",null,c.a.createElement("p",null,t.content),c.a.createElement("small",null," - ",t.author),c.a.createElement("hr",null))},U=function(e){var t=e.movieReviews;return console.log(t),c.a.createElement("div",{className:"review-container"},t&&c.a.createElement("div",null,c.a.createElement("h3",null,"Reviews"),c.a.createElement("div",{className:"review-component"},t?t.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(G,{review:e}))})):null)))},V=function(e){var t=Object(x.c)((function(e){return{movie:e.moviesReducer.movie,movieReviews:e.moviesReducer.movieReviews}})),a=t.movie,r=t.movieReviews,o=Object(x.b)();return Object(n.useEffect)((function(){window.scrollTo(0,0);var t=e.match.params.id;o(j.getMovie(t)),o(j.getMovieReviews(t))}),[o,e.match.params.id]),c.a.createElement("div",{className:"container"},c.a.createElement("main",{className:"movie-container"},c.a.createElement("article",{className:"movie-component is-centered"},c.a.createElement("section",{className:"pc-section-1"},c.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(a.poster_path),alt:"alt"})),c.a.createElement("section",{className:"pc-section-2"},c.a.createElement("h2",{className:"pc-title"},a.title),c.a.createElement("div",{className:"pc-rating"},c.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"}),c.a.createElement("span",null,a.vote_average)),c.a.createElement("p",null,a.overview),c.a.createElement("small",null,"Duration: ",a.runtime+"min"),c.a.createElement("small",null,"Production companies:",a.production_companies&&a.production_companies.map((function(e,t){return c.a.createElement("span",{key:t,className:"badge badge-dark"},e.name)}))),c.a.createElement("small",null,"Genres:",a.genres&&a.genres.map((function(e,t){return c.a.createElement("span",{key:t,className:"badge badge-dark"},e.name)})))))),c.a.createElement(U,{movieReviews:r}))},D=a(22);function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var B=function(e){Object(s.a)(n,e);var t,a=(t=n,function(){var e,a=Object(m.a)(t);if(A()){var n=Object(m.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(u.a)(this,e)});function n(){var e;Object(i.a)(this,n);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={resultMovies:[],searchInputText:""},e.handleChange=function(t){e.setState(Object(D.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();w.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("26b6f99577e56d992ffe47051578e1ac","&language=en-US&query=").concat(e.state.searchInputText,"&page=1&include_adult=false")).then((function(t){e.setState({resultMovies:t.data.results})}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.resultMovies;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text-center"},c.a.createElement("br",null),c.a.createElement("h4",null,"Search a movie"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{type:"text",className:"search-input-text",name:"searchInputText",id:"searchInputText",placeholder:"Search",onChange:this.handleChange}))),c.a.createElement("div",{className:"search-result-container pt-4"},e&&e.map((function(e){return c.a.createElement("div",{className:"search-result-item text-center",key:e.id},c.a.createElement(R,{movie:e}))}))))}}]),n}(n.Component);function J(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var L=function(e){Object(s.a)(n,e);var t,a=(t=n,function(){var e,a=Object(m.a)(t);if(J()){var n=Object(m.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(u.a)(this,e)});function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/movie-catalogue/",component:C}),c.a.createElement(v.a,{exact:!0,path:"/movie-catalogue/:id",component:V}),c.a.createElement(v.a,{exact:!0,path:"/movie-catalogue/search",component:B}))))}}]),n}(n.Component),W=a(46),q=a(10),H=a(16),z={popularMovies:[],topMovies:[],upcomingMovies:[],movieReviews:[],movie:{}},F=Object(q.c)({moviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIES":return Object(H.a)({},e,{popularMovies:t.payload.popularMovies});case"GET_TOP_MOVIES":return Object(H.a)({},e,{topMovies:t.payload.topMovies});case"GET_MOVIE":return Object(H.a)({},e,{movie:t.payload.movie});case"GET_UPCOMING_MOVIES":return Object(H.a)({},e,{upcomingMovies:t.payload.upcomingMovies});case"GET_MOVIE_REVIEWS":return Object(H.a)({},e,{movieReviews:t.payload.movieReviews});default:return e}}}),K=Object(q.e)(F,Object(q.d)(Object(q.a)(W.a)));o.a.render(c.a.createElement(x.a,{store:K},c.a.createElement(L,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e61e88c4.chunk.js.map