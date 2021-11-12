# reactn-tab-nav-folder
ReadMe – React Native / React Mobile:
We created navigation with this application through different ways: Stack, Drawer, and Tab navigation:
Stack is the way of creating buttons (button based) where we navigate between screens where it manages the stack of screens
Drawer is the way where we can slide or swipe of the side of the screen to navigate to different activity. It is where a user can navigate from one screen to another screen very easily by just pulling out the drawer. 
Tab navigation is the way of creating a top or bottom bar navigation on the same screen of the activity.

We implemented this by using NavigationContainer where we import install Navigation controller.
User Guide:
We need to download and install expo.
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack (with button based navigation)
npm install @react-navigation/bottom-tabs (with bottom tab bar navigation)

With App.js, its important to create a constant “const” method that will decide how the feature will look or present the feature. This can be accomplish by the following:
•	For stack nav app: “create Stack = createNativeStackNavigator();”
•	For tab nav app: “create Tab = createBottomTabNavigator();”
•	For drawer app:  “const Drawer = createDrawerNavigator();”

expo install @react-navigation/drawer (with drawer/swipe-slide navigation)
Please make sure that you check the directory or files in the folder by typing “ls” in the View Terminal of Visual Studio Code. Then go inside of the direct folder by typing “cd (foldername)”.
This application just runs in a local host by typing “npm start” or “expo start” in the terminal.
By the time it initially runs in the browser, it will give you the option either to run as is with the web browser (right click and click “inspect”) where you can toggle device toolbar to full page or web mobile app-like emulator. It also give you the option to run in Mobile emulator like Android Mobile using Android Studio or iOS mobile application through Xcode/Swift emulator.  
