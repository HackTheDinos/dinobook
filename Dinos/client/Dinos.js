 Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Template.search.helpers({
  FossilsIndex: () => FossilsIndex
});


Template.imageView.helpers({
  images: function () {

    return Images.find({_id:this.fileId}); // Where Images is an FS.Collection instance
  }
});

Template.three.onRendered(function(){
	var container, stats;
	var geometry, group;
	var mouseX = 0, mouseY = 0;
	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.z = 800;

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight);
	renderer.setClearColor(0xffffff, 1);

	var template = document.getElementById("canvas");
	template.appendChild( renderer.domElement ); 
	console.log(renderer.domElement); 

	var loader = new THREE.JSONLoader();
loader.load( 'sarahs-dino.json', function ( geometry, materials ) {
    var mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
    scene.add( mesh );
});
var loader2 = new THREE.ObjectLoader();
loader2.load("sarahs-dino.json",function ( obj ) {
     scene.add( obj );
});
		
	var cubeMaterial = new THREE.MeshBasicMaterial( { color: 'blue', wireframe: true, transparent: true, opacity: 0.8} );
	var cubeGeometry = new THREE.DodecahedronGeometry( 1,0);
	var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	scene.add( cube );
	scene.add( new THREE.AmbientLight( 0x404040 ) );

	camera.position.z = 5;

	function onDocumentMouseMove( event ) {
		mouseX = ( event.clientX - windowHalfX ) * .1;
		mouseY = ( event.clientY - windowHalfY ) * .1;
	}

	function render() {
		requestAnimationFrame( render );
		cube.rotation.x += 0.02;
		cube.rotation.y += 0.02; 

		//cube.rotation.z += 0.02;

		camera.position.x += ( mouseX - camera.position.x ) * .05+10;
		camera.position.y += ( - mouseY - camera.position.y ) * .05+10;
		camera.position.z = 5;

		camera.lookAt( scene.position );
		
		renderer.render( scene, camera );
	}
	render();
	


})