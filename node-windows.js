var Service = require('node-windows').Service;
// Create a new service object
var svc = new Service({
    name: 'myGitAgent',
    description: 'This is my git agent for contunuous commits',
    script: 'D:\\work\\personal\\asvah\\myGitAgent\\index..js',
    wait: 10,
    // nodeOptions: [
    //   '--harmony',
    //   '--max_old_space_size=4096'
    // ]
    //, workingDirectory: '...'
    //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
// svc.on('install', function () {
//     svc.start();
// });

// svc.install();


svc.on('uninstall', function () {
    console.log('Uninstall complete.');
    console.log('The service exists: ', svc.exists);
});

// Uninstall the service.
svc.uninstall();