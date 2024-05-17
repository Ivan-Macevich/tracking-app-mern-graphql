const transactionTypeDef = `#graphql 
    type Transaction {
        _id: ID!
        userId: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String!
        date: String!
    }

    type Query {
        transactions: [Transaction!],
        transaction(transactionId: ID!): Transaction
    }

    type Mutation {
        createTransaction(input: TransactionInput!): Transaction
        updateTransaction(transactionId: ID!, input: TransactionInput!): Transaction
        deleteTransaction(transactionId: ID!): Transaction
    }

    input TransactionInput {
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        date: String!
        location: String
    }
`