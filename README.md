# ERC-1155 MULTI-TOKEN STANDARD

ERC1155 is a novel token standard that aims to take the best from previous standards to create a fungibility-agnostic and gas-efficient token contract.


Difiere en los demas estandares por ejemplo que en la funcion `balanceOf` tien un argumento `id` adicional para poder identificar el token que se desea consultar el saldo.


En ERC721 la funcion `balanceOf` se refiere a cuantos tokens diferentes tiene un cuenta NO a cuantos de cada uno. En ERC115 las cuentas tiene un saldo diferente para cada `id` y los tokens no fungibles se implementan acuñando uno solo de ellos.

Asi se ahorra en gas. En lugar de implementar un contrato por cada token un solo contrato de token ERC1155 puede manejar todo el estado del sistema


## Operación por lotes 

Se puede operar en multiples token en una sola transaccion de manera eficiente. El estandar proporciona dos funciones `balanceOfBatch` y `safeBatchTransferFrom`. Consulta y transferencia de multiples saldos mas simple y eficiente en el uso del gas.

Para acuñar por lote se tiene la funcion `_mintBatch`


