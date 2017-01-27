## Demo created at Seattle Angular Meetup on Jan. 26, 2017

1. `npm i`
2. Compile custom pdf plugin using Swift Cocoapod:

```
tsc nativescript-pdf/pdf.ios.ts --types tns-core-modules --experimentalDecorators true
```

3. Ensure latest plugin is included:

```
tns plugin remove nativescript-pdf
tns plugin add nativescript-pdf
```

4. Run iOS app

```
tns run ios --emulator
```

5. When app launches, click 'Create PDF'

6. View console and copy the path it wrote the pdf to, then open that path from the terminal. For example (the path provided is just from my system run of the app - your path will be different):

```
open /Users/nathan/Library/Developer/CoreSimulator/Devices/50661F53-A3AF-4858-AB9E-DFD7D9F88746/data/Containers/Data/Application/D5DC81DE-52BC-4BE2-815C-4CA967379554/Documents/test.pdf
```