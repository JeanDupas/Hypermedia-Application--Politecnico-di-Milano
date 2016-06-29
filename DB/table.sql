CREATE TABLE tImages (
    idImage INT UNSIGNED NOT NULL AUTO_INCREMENT,
    alt VARCHAR(50) NOT NULL,
    src VARCHAR(50) NOT NULL,
    PRIMARY KEY (idImage)
);

CREATE TABLE tDevices (
    idDevice INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    price DOUBLE UNSIGNED NOT NULL,
    constructor VARCHAR(40),
    description TEXT NOT NULL,
    idImage INT UNSIGNED NOT NULL,
    PRIMARY KEY (idDevice),
    CONSTRAINT fk_Devices_Images
        FOREIGN KEY (idImage)
        REFERENCES tImages(idImage)
);

CREATE TABLE tSmartLivingAndTV (
    idSLiving INT UNSIGNED NOT NULL,
    screenSize DOUBLE UNSIGNED NOT NULL,
    height DOUBLE UNSIGNED NOT NULL,
    width DOUBLE UNSIGNED NOT NULL,
    depth DOUBLE UNSIGNED NOT NULL,
    weight DOUBLE UNSIGNED,
    resolutionHeight INT UNSIGNED NOT NULL,
    resolutionWidth INT UNSIGNED NOT NULL,
    PRIMARY KEY (idSLiving),
    CONSTRAINT fk_SLiving_Devices
        FOREIGN KEY (idSLiving)
        REFERENCES tDevices(idDevice)
);

CREATE TABLE tPhones (
    idPhone INT UNSIGNED NOT NULL,
    os VARCHAR(20) NOT NULL,
    talkTime VARCHAR(20) NOT NULL,
    internalMemory DOUBLE UNSIGNED NOT NULL,
    screenSize DOUBLE UNSIGNED NOT NULL,
    network VARCHAR(40) NOT NULL,
    phoneHeight DOUBLE UNSIGNED NOT NULL,
    phoneWidth DOUBLE UNSIGNED NOT NULL,
    phoneDepth DOUBLE UNSIGNED NOT NULL,
    weight DOUBLE UNSIGNED NOT NULL,
    resolutionHeight INT UNSIGNED NOT NULL,
    resolutionWidth INT UNSIGNED NOT NULL,
    CPU VARCHAR(100) NOT NULL,
    ram DOUBLE UNSIGNED NOT NULL,
    priCamera VARCHAR(50),
    secCamera VARCHAR(50),
    battery VARCHAR(50) NOT NULL,
    PRIMARY KEY (idPhone),
    CONSTRAINT fk_Phones_Devices
        FOREIGN KEY (idPhone)
        REFERENCES tDevices(idDevice)
);

CREATE TABLE tSmartLifeServices (
    idSLService INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    short TEXT NOT NULL,
    description TEXT NOT NULL,
    activationRules TEXT NOT NULL,
    category CHAR(2) NOT NULL,
    idImage INT UNSIGNED NOT NULL,
    PRIMARY KEY (idSLService),
    CONSTRAINT fk_SLServices_Images
        FOREIGN KEY (idImage)
        REFERENCES tImages(idImage)
);

CREATE TABLE tSmartLifeServicesDevices (
    idSLService INT UNSIGNED NOT NULL,
    idDevice INT UNSIGNED NOT NULL,
    PRIMARY KEY (idSLService, idDevice),
    CONSTRAINT fk_SLServicesId
        FOREIGN KEY (idSLService)
        REFERENCES tSmartLifeServices(idSLService),
    CONSTRAINT fk_DeviceId
        FOREIGN KEY (idDevice)
        REFERENCES tDevices(idDevice)
);

CREATE TABLE tAssistance (
    idAssistance INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    category CHAR(2) NOT NULL,
    hightlight BOOLEAN NOT NULL,
    PRIMARY KEY(idAssistance)
);

CREATE TABLE tAssistanceDevices (
    idAssistance INT UNSIGNED NOT NULL,
    idDevice INT UNSIGNED NOT NULL,
    PRIMARY KEY (idAssistance, idDevice),
    CONSTRAINT fk_AssistanceId
        FOREIGN KEY (idAssistance)
        REFERENCES tAssistance(idAssistance),
    CONSTRAINT fk_DeviceId
        FOREIGN KEY (idDevice)
        REFERENCES tDevices(idDevice)
);

CREATE TABLE tPromotion (
    idDevice INT UNSIGNED NOT NULL,
    percentage DOUBLE UNSIGNED NOT NULL,
    PRIMARY KEY(idDevice),
    CONSTRAINT fk_DeviceId
        FOREIGN KEY (idDevice)
        REFERENCES tDevices(idDevice)
);

INSERT INTO tImages
VALUES (NULL , 'appleIphone6S', 'phones/appleIphone6S.png'), (NULL , 'lgG5', 'phones/lgG5.png'), (NULL , 'samsungS7', 'phones/samsungS7.png'), (NULL , 'nokiaLumia950', 'phones/nokiaLumia950.jpg'), (NULL , 'galaxyGearS', 'smartLiving/galaxyGearS.jpg'), (NULL , 'gearFit', 'smartLiving/gearFit.jpg'), (NULL , 'Pay with your phone', 'smartLifeServices/payWPhone.png'), (NULL , 'Smart Wearables', 'smartLifeServices/smartWearables.png');

INSERT INTO tDevices
VALUES (NULL, 'iPhone 6S', 789.90, 'Apple', 'The iPhone 6s keeps the same design as the iPhone 6, but packs better cameras, a snappier processor and 3D Touch, a smart new way to get things done in fewer steps. Beyond that, the combination of iOS 9 and some well-built hardware help makes the 6s one of the best iPhones ever made.', 1), (NULL, 'G5', 699.90, 'LG', 'In an effort to differentiate it from the Samsung Galaxy S7 and HTC 10, LG is betting everything on a fancy new "modular" system of accessories for its flagship G5 smartphone. This makes the LG G5 appear like one of 2016’s most interesting releases. Especially when so many phone these days seem to be following a "paint by numbers" formula.', 2), (NULL, 'Lumia 950', 400, 'Nokia', 'Microsoft Lumia 950 is the firstborn of the new Lumia series, following the company\'s strategy shift. It\'s a precisely designed smartphone with clear ideas for its future, sharp hardware choices and groundbreaking software innovations. It\'s an epic device based on Nokia\'s legacy and reborn under Microsoft\'s custody.', 4), (NULL, 'Galaxy S7', 700, 'Samsung', 'The Galaxy S7 marks the return of the microSD slot and water-proofing, and while the battery is still sealed (which doesn\'t seem likely to change going forward), Samsung has been a lot more generous with the capacity for this generation. Galaxy flagships have always led the way when it comes to imaging, their cameras always being among the top performers in the market. This time around, Samsung went backwards to play a different game of numbers: fewer but larger pixels, all 12 million of them capable of phase detection. Lightning-fast autofocus is the promise, and we\'ve already seen the S7 deliver on it.', 3);

INSERT INTO tPhones
VALUES (1, 'iOS', '4G', 32, 4.7, 'GSM / CDMA / HSPA / EVDO / LTE', 138.3, 67.1, 7.1, 143, 750, 1334, 'Dual-core 1.84 GHz Twister', 2, '12 MP / flash', '5 MP 1080p@30fps 720p@240fps', 'Non-removable Li-Po 1715 mAh'), (2, 'Android', '4G', 16, 5.3, 'GSM / CDMA / HSPA / LTE', 149.4, 73.9, 7.7, 159, 1440, 2560, 'Dual-core 2.15 GHz Kryo & dual-core 1.6 GHz Kryo', 4, '16 MP / flash', '8 MP 1080p@30fps', 'Removable Li-Ion 2800 mAh battery'), (3, 'Windows Phone', '4G', 32, 5.2, 'GSM / CDMA / HSPA / LTE', 145, 73.2, 8.2, 150, 1440, 2560, 'Quadri-cœur ARM Cortex A57 1.8 GHz + Quadri-cœur ARM Cortex A53 1.44 GHz - 1.8 GHz', 4, '20 MP / flash', '8 MP 1080p@30fps', 'Removable Li-Ion 3000 mAh battery'), (4, 'Android', '4G', 32, 5.1, 'GSM / CDMA / HSPA / LTE', 142.4, 69.6, 7.9, 159, 1440, 2560, 'ARM Cortex-A72 - 2.3 GHz', 4, '12.2 MP / flash', '8 MP 1080p@30fps', 'Removable Li-Ion 3000 mAh battery');

INSERT INTO tDevices
VALUES (NULL, 'Galaxy Gear S', 300, 'Samsung', 'The dream of a fully standalone wrist gadget that can make phone calls, stay connected and even help you be sounds good, at least on paper. To own a smartwatch usually means having it be perma-paired to a phone in your pocket: it ends up being, largely, a phone accessory. That\'s starting to change. A few bold watches are trying to break away and be their own devices, with their own phone service to boot. The Samsung Gear S is one of those. This is Samsung\'s sixth smartwatch in a little over a year, but it has one big difference: it gets its own cell service and data. It even has its own SIM-card slot. It\'s a watch that\'s also a phone.', 5), (NULL, 'Gear Fit', 100, 'Samsung', 'The Gear Fit has a forward-looking design, many more extras than the average fitness band, and the ability to measure heart rate. Its curved AMOLED display looks fantastic, too.', 6);

INSERT INTO tSmartLivingAndTV
VALUES (5, 2, 58.1, 39.9, 12.5, 67, 360, 480), (6, 1.84, 30.6, 20.4, 9.8, 49, 432, 128);

INSERT INTO tSmartLifeServices
VALUES (NULL, 'Pay With Your Phone','With TIM Wallet you can use your smartphone to pay in all authorized shops.','<p>TIM SmartPay is the payment card convenient and secure prepaid, in collaboration with Intesa Sanpaolo and VISA. <br/> TIM SmartPay, the prepaid card was born from the partnership between Intesa Sanpaolo and TIM dedicated to all TIM customers, or choose the payment card you prefer among those available between Intesa Sanpaolo, UBI Banca Mediolanum, BNL bank or Hello !</p> <h2>Advantages</h2> <p><b>SURE</b> <br/> The details of your credit card or debit card are stored confidentially and protected on TIMcard. <br/> <b>QUICK AND EASY</b> <br/> Just a touch to select the card with which to make your purchases. <br/> <b>COMFORTABLE</b> <br/> Leave your wallet at home and use the smartphone to have on hand your cards.</p>', '<h2>TIM Card NFC</h2> <p>For full use of all the services offered by TIM Wallet we suggest using a TIM Card NFC. Request the paper change in a TIM Store, or become a customer by buying a new TIM! Remember, the payments service is only available for TIM Card NFC.</p> <h2>TIM Wallet Active</h2> <p>Remember to download the app TIM Wallet and activate it by going at least once a service.</p> <h2>Smartphone NFC</h2> <p>Discover all smartphones that are enabled for payment services. Check the list of compatible terminals, certified to ensure the safety requirements of banks and payment networks.</p>','PE',7), (NULL, 'Smart Wearables', 'Try the latest wearables. Find out how health and wellness can positively change your life. Free your desire to move. Share your results with friends. The future is smart.', '<p>Try the latest wearables. Find out how health and wellness can positively change your life. Free your desire to move. Share your results with friends. The future is smart.</p> <p>All these bracelets offers smart life services. They can automatically record your physical, social activities and entertainment. They make your life easier and healthier all day long.</p>', '<p>You just have to buy a smart wearable in our store and use your TIM account !</p>','HE',8);

INSERT INTO tSmartLifeServicesDevices
VALUES (1,1), (1,2), (1,3), (1,4), (2,5), (2,6);

INSERT INTO tAssistance
VALUES (NULL, 'Check remaining credit and bonuses available for Prepaid customers', '<p>The remaining credit available, the offers and the status of active bonus on your rechargeable line, are available through the following ways: <br/> - Right from your Smartphone, signing into the MyTIM Mobile, currently available for free download in versions for iPhone and smartphones with Android operating system. <br/> - Directly online on the website under MyTIM Mobile reserved for our clients that allows you to check the remaining credit, the amount of minutes, SMS, GB still available, in euro bonus that may be present and make changes on your telephone line. <br/> - By calling the freephone number 40916, for the remaining credit. Also typing the key 1 can know the active offers, the amount of minutes, SMS, GB still available and in the euro bonus, if any. <br/> - Through the free service 119sms; by sending an SMS to 119 "free text" (eg "What is my remaining credit") the service will respond with a text message with the requested information.</p>','CP',1), (NULL, 'Call detail for customers', '<p>The "traffic documentation" service offers you a chance to get the details of every phone call, data connection or other event, made from your line (*). <br/> For each event is provided indicating the date / time of execution, the cost, the type and number called in the case of voice traffic or SMS (with the last three digits asterisked - L. 171/98 "privacy protection in telecommunications ").<br/>
The documentation of the traffic is always available in MyTIM Mobile and available up to two months prior to the date of consultation of traffic if you use a rechargeable line, easily available in different formats and archived (as pdf).<br/>
You can still request to send a hard copy printout of the previous traffic (equivalent to the already available in pdf MyTIM Mobile), or sending a printout of plain previous traffic (in this case must be specified), as long as falls within periods indicated above. In this case you will need to complete and submit the appropriate "Request Documentation Traffic" form which can be downloaded in pdf format from the section modules, selecting the reference Rechargeable subsection.</p>','CP',1);

INSERT INTO tAssistanceDevices
VALUES (1,1), (1,2), (1,3), (1,4), (2,1), (2,2), (2,3), (2,4);

INSERT INTO tPromotion
VALUES (1,10), (2,10), (5,20);

-- We use idDevice instead of just id, to avoid problems when converting to json
-- In the table smartLifeServices we use category to distinguish the 4 categories : 'TV' for TV and Entertainment, 'HE' for Health and Wellness, 'HO' for Home and Family, 'PE' for Personal Services
-- In the table assistance we use category to distinguish the 4 categories : 'LM' for Line Management, 'CP' for Costs and Payments, 'TS' for Technical Support, 'SL' for Smart Life Services
