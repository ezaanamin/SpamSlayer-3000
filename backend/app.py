from flask import Flask, request, jsonify

from nltk.corpus import stopwords
from  nltk.stem.porter import PorterStemmer
import pickle
import string
import nltk
from flask_cors import CORS

nltk.download('stopwords')
nltk.download('punkt')
nltk.download('punkt_tab')
app = Flask(__name__)
CORS(app) 

tfif = pickle.load(open('/home/ezaan-amin/Documents/PortFolio/SpamSlayer-3000/backend/models/vectorizer.pkl', 'rb'))
model = pickle.load(open('/home/ezaan-amin/Documents/PortFolio/SpamSlayer-3000/backend/models/model.pkl', 'rb'))
stop_words = set(stopwords.words('english'))
ps = PorterStemmer()
def text_transformation(text):
    text=text.lower()
    text=nltk.word_tokenize(text)
    y=[]
    for i in text:
        if i.isalnum():
            y.append(i)
    text=y[:]
    y.clear()

    for i in text:
        if i not in stop_words and i not in string.punctuation:
            y.append(i)
    text=y[:]
    y.clear()
    for i in text:
        y.append(ps.stem(i))
    return " ".join(y)
@app.route('/',methods = ['GET', 'POST'])
def home():
       if request.method == 'POST':
            data=request.get_json()
            text=data['text']
            print(text)
            transformed_sms=text_transformation(text)
            vector_input=tfif.transform([transformed_sms])
            result=model.predict(vector_input)[0]
            print(result)
            if result==0:
                return "not spam"
            if result==1:
                return "spam"
           
    


if __name__ == '__main__':
    app.run(debug=True)
