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

 	var scene = new THREE.Scene();
 	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
 	camera.position.z = 800;

 	var renderer = new THREE.WebGLRenderer();
 	renderer.setSize( window.innerWidth/2, window.innerHeight/2);
 	renderer.setClearColor(0xffffff, 1);

 	var template = document.getElementById("canvas");
 	template.appendChild( renderer.domElement ); 
 	console.log(renderer.domElement); 


 	var loader2 = new THREE.ObjectLoader();
 	loader2.load("sarahs-dino.json",function ( obj ) {
 		obj.rotation.y +=70;
 		document.addEventListener( 'mousemove', onDocumentMouseMove, false );

 		console.log(obj);

 		scene.add( obj );

 		function onDocumentMouseMove( event ) {

 			var spdy =  (windowHalfY  - mouseY) / 100;
 			var spdx =  (windowHalfY  - mouseX) / 100;

 			obj.rotation.x += (spdy/10);
 		}

 	});

 	scene.add( new THREE.AmbientLight( 0x404040 ) );

 	camera.position.z = 5;



 	function render() {
 		requestAnimationFrame( render );
		camera.position.x += ( mouseX - camera.position.x ) * .05+10;
		camera.position.y += ( - mouseY - camera.position.y ) * .05+10;
		camera.position.z = 5;

		camera.lookAt( scene.position );
		
		renderer.render( scene, camera );
	}
	render();
	


})