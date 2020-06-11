import React , {Component} from 'react';

import { WebView } from 'react-native-webview';

// this component never will acess the state 
const Product = ( { route } ) =>(
  <WebView source = {{uri : route.params.product.url}} />
) 

export default Product;