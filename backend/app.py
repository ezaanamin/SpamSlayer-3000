from flask import Flask
from nltk.corpus import stopwords
from  nltk.stem.porter import PorterStemmer
import pickle
import string
import nltk
nltk.download('stopwords')
nltk.download('punkt')
nltk.download('punkt_tab')
app = Flask(__name__)
tfif=pickle.load(open('/home/ezaan-amin/Documents/PortFolio/SpamSlayer-3000/models/vectorizer.pkl','rb'))
model=pickle.load(open('/home/ezaan-amin/Documents/PortFolio/SpamSlayer-3000/models/model.pkl','rb'))
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
    a="ezaan"
    transformed_sms=text_transformation(a)
    vector_input=tfif.transform([transformed_sms])
    result=model.predict(vector_input)[0]
    print(result)
    return "hello"


if __name__ == '__main__':
    app.run(debug=True)
