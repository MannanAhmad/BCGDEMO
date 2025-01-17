/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('DemoDashboard.qvf', config);

	var app1 = qlik.openApp('FinalAssignment(Dashboard2).qvf', config);

	var app2 = qlik.openApp('FinalAssignment(Dashboard2).qvf', config);

	var app3 = qlik.openApp('FinalAssignment(Dashboard2).qvf', config);

	var app4 = qlik.openApp('BCG (2).qvf', config);

	//get objects -- inserted here --
	app4.getObject('QV01','YWaC');
	app3.getObject('QV03','PsvmvZ');
	app2.getObject('QV02','PsvmvZ');
	
	
	
	//create cubes and lists -- inserted here --

} );
