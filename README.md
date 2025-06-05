<div align="center">

# React Native detox  
<img width="550" alt="Screenshot 2025-06-05 at 17 12 53" src="https://github.com/user-attachments/assets/8ac94f15-7535-45a0-bec1-887f9b650967" />

</div>


## whats is tests e2e?
It's a test that simulates the entire flow of the application running from end to end, ensuring that all the parts work correctly when put together

## Trade-offs
### Advantages
- create a real scenario for testing
- ensures that all parts work
- avoid regressions

### Disadvantages
- complex to config
- expensive to run
- makes the pipeline more expensive and slower

## How to run

### build debug
- ios
```
detox build --configuration ios.sim.debug
```
- android
```
detox build --configuration android.emu.debug
```
### build release
- ios
```
detox build --configuration ios.sim.release
```
- android
```
detox build --configuration android.emu.release
```

### test debug
- ios
```
detox test --configuration ios.sim.debug
```
- android
```
detox test --configuration android.emu.debug
```
### test release
- ios
```
detox test --configuration ios.sim.release
```
- android
```
detox test --configuration android.emu.release
```

## ScreenShots
### App Screenshots

|                |              Ios                |              Android                                  | 
 | :------------: | :----------------------------------------: | :---------------------------------------: | 
 | Login Screen | ![](https://github.com/user-attachments/assets/76a86e89-aa9a-4a42-ad24-0be43d03b893) | ![](https://github.com/user-attachments/assets/4f021a2d-545d-4df7-81f9-3c1c8c17383c) | 
 | Item Screen | ![](https://github.com/user-attachments/assets/4f021a2d-545d-4df7-81f9-3c1c8c17383c) | ![](https://github.com/user-attachments/assets/4f021a2d-545d-4df7-81f9-3c1c8c17383c) |
 | Details Screen | ![](https://github.com/user-attachments/assets/597f57f2-0c31-4581-aaf5-824d5b9f5ef6) | ![](https://github.com/user-attachments/assets/597f57f2-0c31-4581-aaf5-824d5b9f5ef6) |
