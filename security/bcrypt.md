## KDS

https://en.wikipedia.org/wiki/Key_derivation_function

salt é um número ou string que a gente passa na senha para fazer um append à senha. O bcrypt gera um número aleatório baseado no número do salt (ex: 12)

O kdf permite gerar hashes não determinísticos, dessa forma, cada vez que uma senha é criptografada, ele gera um hash diferente

Hash Encrypt Encoding

https://www.packetlabs.net/encryption-encoding-and-hashing/#:~:text=Encoding%3A%20Reversible%20transformation%20of%20data,to%20protect%20confidentiality%20of%20data.
