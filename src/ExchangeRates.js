import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  return (
    <Query query={GET_RATES}>
      {({ loading, error, data: { rates } }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return rates.map(({ currency, rate }) => (
          <div key={currency}>
            <p>{`${currency}: ${rate}`}</p>
          </div>
        ));
      }}
    </Query>
  );
};
export default ExchangeRates;
