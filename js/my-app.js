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
	modalTitle: 'CineApp',
	dialog:{
		title: 'CineApp',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
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
// Export selectors engine
var $$ = Dom7;

$$('#btnComprar').on('click', function () {
  app.dialog.alert('!Tu compra fue realizada correctamente!');
});

$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Desea procesar su compra?', function () {
    app.dialog.alert('!Tu compra fue realizada correctamente!');
  });
});

$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "movil" && Password == "123"){
		app.dialog.alert('¡ Bienvenido a CineApp, la mejor app para ver que peliculas estan disponibles !');
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});



 




 

