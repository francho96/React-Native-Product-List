# React-Native-Product-List
Creada como code challenge, es una aplicación básica de lista de productos para React Native con solo core components, se ocupó Expo Go, con emulador de Android Studio.
Para simular llamada de API, se ocupo la siguiente estructura:
```
{
      id: string;
      name: string;
      price: string;
      description: string;
      image: string;
}[]
```
Con image como link a una foto de referencia, para así por ejemplo, devolver imágenes desde algún servidor como Minio, que tenga la capacidad de guardar archivos, obviamente las imagenes que estan dentro de la aplicación son links de google, pero que sirven como ejemplo, también, dentro de la app, se tiene id como serial, lo cual debería ser uuid si se trabaja con datos desde alguna BD.
## Para correr la aplicación
Se necesita clonar esta rama del repositorio, posteriormente dentro se debe ejecutar:
```
npm install
```
Para lograr instalar las dependencias, por último, si se quiere ejecutar en red local desde un celular via QR:
```
npx expo start
```
Si se quiere ejecutar mediante un tunnel, para algún emulador nativo:
```
npx expo start --tunnel
```
## Pantallazos:
![image](https://github.com/francho96/React-Native-Product-List/assets/71195484/bbf7fd81-0dfd-4b07-8bef-fb223bd74625)
![image](https://github.com/francho96/React-Native-Product-List/assets/71195484/32a24729-fce8-47e4-aa33-5d9f8076a426)

## Ejecución de la aplicación:


https://github.com/francho96/React-Native-Product-List/assets/71195484/f932b30b-63ea-4462-ae3f-5a6a49b303f9

