## Objective: Create Landing Page that Maximizes Conversion Rate for a Specific Demographic

Users are going to navigate to this page via an e-mail promo, so they are already interested in downloading the app. The landing page design should be as unintrusive to that objective as possible.

The following design decisions were influenced by the demographic requirements:

### Older Users (aged 65+)

Older users are less web-savvy on average, so I tried to make the layout and content as simple to decipher as possible. The weather display widget is compact, and the weather data being displayed is a simple overview of the data points that would be of most interest to most users. Honestly, just seeing a web page display their home city and current temperature would be enough to impress most of the 65+ crowd. But the weather data is not the main attraction here. The call-to-action button is large with a bright color that stands out from all the other elements, and the button will always appear above the fold due to the limited amount of total content being displayed. No scrolling required.

Older users also have lower average eyesight capabilities, so the larger the font size, the better. It's still imperative to have all content fit within the width of a mobile-sized screen, though, so 14px was the absolute smallest I was willing to go. (With the exception of the footer, which is non-essential to the conversion goal.) I went with Georgia for the header text: simple, pleasant, and somewhat traditional. Century Gothic is a personal favorite of mine that gives off the aura of sophistication, so I went with that for the weather data and the CTA button. And the 90% opacity on the main content container makes all of the text easily legible while still allowing just enough of the background image to be seen.

My method of error handling was also influenced by this requirement. If for whatever reason the site fails to retrieve the local weather data from the external endpoint, that should in no way obstruct the user's main goal: finding the button that allows them to download the app. In the event of an error, I simply don't render the weather widget, and slightly modify the header text to make sense for its absence.

### Located in Coastal Florida, and Interested in Outdoor Activities

These two requirements combined pretty much solidified that I needed to incorporate some kind of imagery or invoked senior citizens spending time at the beach. I signed up for the free trial of Adobe Stock and found an appropriate husband-and-wife photo to use as the background.

### Using Android Mobile Devices
When designing in Adobe XD, I chose the Samsung Galaxy S10 (probably the most popular Android phone in recent memory) as the starting point, so all assets were designed to be displayed properly at a minimum width of 360px. Also, this requirement implies that the mobile app itself is only Android-compatible, so I made direct reference to Android and the Google Play Store in my header copy in order to avoid confusion from any potential iPhone or Desktop users. Ostensibly, the CTA button should link directly to the app page on the Google Play Store.