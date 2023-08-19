// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    // Optionally perform cleanup tasks here
  });
  
  // Handle unhandled promise rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
    // Optionally perform cleanup tasks here
  });
  
  const qrcode = require('qrcode-terminal');
  const { Client, Location, List, Buttons, LocalAuth,MessageMedia} = require('whatsapp-web.js');
  const path = require('path');
  


  const client = new Client();
  client.on('qr', (qr) => {
  // Display the QR code in the terminal
  console.log('Scan the following QR code to log in:');
  qrcode.generate(qr, { small: true });
  });
  client.on('ready', () => {
  console.log('Client is ready!');
  });
  client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);
  
  
  
  // First sample reply of message
    if (msg.body === '!ping reply') {
        // Send a new message as a reply to the current one
        msg.reply('pong');
  
    } 
  
  

  
  
  //storing user data phone number
    const path = require('path');
    const fs = require("fs");
    function isPhoneNumberExist(phoneData, phoneNumber) {
      return phoneData.some((data) => data.phoneNumber === phoneNumber);
    }
    function storePhoneNumberAndBalance(phoneNumber, balance) {
      const data = { phoneNumber, balance };
      const filePath = path.join(__dirname, 'users.json');
      fs.readFile(filePath, 'utf8', (err, jsonData) => {
        let phoneData = [];
        if (!err) {
          try {
            phoneData = JSON.parse(jsonData);
          } catch (parseError) {
            console.error('Error parsing existing JSON data:', parseError);
          }
        }
        if (isPhoneNumberExist(phoneData, phoneNumber)) {
          console.log('Phone number already exists. Data not stored.');
        } else {
          phoneData.push(data);
          fs.writeFile(filePath, JSON.stringify(phoneData, null, 2), (writeErr) => {
            if (writeErr) {
              console.error('Error writing to JSON file:', writeErr);
            } else {
              console.log('Data stored successfully!');
            }
          });
        }
      });
    }
   //storing phone
   if (msg.body) {
        const senderNumber = msg.from;
        const input = senderNumber;
        const phoneNumberRegex = /(\d+)/;
        const match = input.match(phoneNumberRegex);
        if (match && match[1]) {
        const phoneNumber = match[1];
        console.log("Phone Number:", phoneNumber);
        const balance = 0;
        storePhoneNumberAndBalance(phoneNumber, balance);  
        } else {
        console.log("Phone number not found.");
            }   
  }
  
  

  
  
  
  

  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
   
  
  
  
  
  
  
  
  
  
 
  
  
  

  
  
  
  
  
  
    
  
  
  
  
  
  });
  
  
  client.initialize();
  
