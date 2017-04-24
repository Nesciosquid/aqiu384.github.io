const access_key = 'AIzaSyBilbAppIGsu4cQZ4vDSF3ByiSffp3tQ9c';
const translateUrl = 'https://translation.googleapis.com/language/translate/v2';

export const translateString = (text) => {
  const targetUrl = `${translateUrl}?q=${text}&target=en&key=${access_key}`
  return new Promise((resolve, reject) => {
    fetch(targetUrl).then(response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(Error("Something went wrong!"));
      }
    })
  });
}

export const translatePersona = persona => {
  const newPersona = Object.assign({}, persona);
  const negotiations = translateNegotiations(persona).then(negotiations => {
    newPersona.negotiations = negotiations;
  });
  const shadow = translateShadow(persona).then(shadow => {
    newPersona.shadow = shadow;
  });
  const item = translateItem(persona).then(item => {
    newPersona.item = item;
  });
  const drop = translateDrop(persona).then(drop => {
    newPersona.drop = drop;
  });
  return Promise.all([negotiations, shadow, item]).then(() => newPersona);
}

export const translateDrop = persona => {
  return new Promise((resolve, reject) => {
    if (persona.drop !== '-') {
      translateString(persona.drop).then((obj) => {
        resolve(obj.data.translations[0].translatedText)
      });
    } else {
      resolve(undefined);
    }
  })
};

export const translateNegotiation = negotiation => {
  const negotiationStrings = Object.keys(negotiation);
  const negotiationValues = negotiationStrings.map(key => negotiation[key])
  const promises = negotiationStrings.map(statement => {
    return new Promise((resolve, reject) => {
      translateString(statement).then(obj => {
        const translated = obj.data.translations[0].translatedText;
        resolve({
          translatedStatement: translated,
          answer: negotiation[statement]
        });
      });
    });
  });
  return new Promise(resolve => {
    Promise.all(promises).then(values => {
      const phrases = {};
      values.forEach(pair => {
        phrases[pair.translatedStatement] = pair.answer;
      })
      resolve(phrases);
    });
  });
};

export const translateNegotiations = persona => {
  const negotiations = persona.negotiations;
  if (negotiations) return Promise.all(negotiations.map(translateNegotiation));
  else return new Promise((resolve, reject) => resolve(undefined));
};

export const translateShadow = persona => {
  return new Promise((resolve, reject) => {
    translateString(persona.shadow).then((obj) => resolve(obj.data.translations[0].translatedText))
  })
};

export const translateItem = persona => {
  return new Promise((resolve, reject) => {
    translateString(persona.item).then((obj) => resolve(obj.data.translations[0].translatedText))
  })
};
