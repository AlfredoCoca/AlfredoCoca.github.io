// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Metro_Cinema',
	dialog:{
		title: 'Metro_Cinema',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
		
		{
		path: '/Estrenos/',
    	url: 'Estrenos.html',
    	name: 'Estrenos',
  		},
		{
		path: '/Perfil/',
    	url: 'Perfil.html',
    	name: 'Perfil',
  		},
		{
		path: '/Ajustes/',
    	url: 'Ajustes.html',
    	name: 'Ajustes',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		
		
		
		
	]
});




 

