# react-native-first

## Estudiar para el proyecto:
- [x] GraphQL / Apollo Client
- [x] TailwindCSS
- [ ] Flexbox
- [ ] Typescript 

## Tareas del proyecto
- [x] Traer datos de un server graphql usando apollo client
- [x] Maquetar el componente que esta en el archivo TabTwoScreen
- [x] Usar tailwindRN lo más q puedas
- [ ] Usar el Component Library react-native-paper
- [x] Los datos q traigas q sean una lista preferiblemente q se pueda escrolear
- [ ] Manejar el loading state extra
- [x] El component trata de maquetarlo tú a mano para q le cojas el golpe

## Error comun de conexion a dispositivo de Android:
El equipo de destino denegó expresamente dicha conexión. (10061)). Build with -s ASSERTIONS=1 for more info.

### Solución:

1 Entrar a power shell en modo administrador.

2- cd C:\Users\MEGAPC\AppData\Local\Android\Sdk\platform-tools

3- .\adb kill-server

4- .\adb start-server

## Configuracion de Tailwind-RN
1- npm install tailwind-rn

2- npx setup-tailwind-rn

Aqui es importante fijarse en los pasos que salen en consola.

2.1- Configurar tailwind.config.js agregando las siguientes lineas:

```JS
content: [
    './pages/**/*.{html,js,tsx,ts}',
    './components/**/*.{html,js,tsx,ts}',
    './screens/**/*.{html,js,tsx,ts}'
],
```

2.2 Correr en la terminal:

yarn dev:tailwind

3-Hacer en App.jsx

```JS
import {TailwindProvider} from 'tailwind-rn';

import utilities from './tailwind.json';

const App = () => (
	<TailwindProvider utilities={utilities}>
		<MyComponent />
	</TailwindProvider>
);
```

4- Agregar a nuestro componente estas lineas

```JS
import {useTailwind} from 'tailwind-rn';

const Hello = () => {
    
	const tailwind = useTailwind();

	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('pt-12 items-center')}>
				<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
					<Text style={tailwind('text-blue-800 font-semibold')}>
						Hello Tailwind
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};
```

## Configuracion de Apollo/Client

1- npm install @apollo/client graphql

2- Agregar el siguiente codigo en App.jsx

```JS
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

//Estas lineas antes de    export default function App() {
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

```

3- Para versiones superiores a 3.5 debemos crear un archivo metro.config.js en la raiz del proyecto. En este debemos incorporar el siguiente codigo.

```JS
 const {getDefaultConfig} = require('metro-config');
 const {resolver: defaultResolver} = getDefaultConfig.getDefaultValues();
 
 module.exports = {
   resolver: {
     ...defaultResolver,
     sourceExts: [...defaultResolver.sourceExts, 'cjs'],
   },
   transformer: {
     getTransformOptions: async () => ({
       transform: {
         experimentalImportSupport: false,
         inlineRequires: true,
       },
     }),
   },
 };
 ```

 4- run npx react-native start --reset-cache



