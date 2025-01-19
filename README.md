

# SpamSlayer-3000

SpamSlayer-3000 is an SMS spam classification project built to automatically detect and filter spam messages from legitimate ones using machine learning techniques. The project employs natural language processing (NLP) methods for text preprocessing and feature extraction, along with various classification algorithms to achieve high accuracy in spam detection.

## Features

- **SMS Spam Classification**: Classifies messages as either "spam" or "not spam" based on their content.
- **Data Preprocessing**: Text transformation using tokenization, stopword removal, and stemming.
- **Data Visualization**: Word clouds and histograms to visualize spam and non-spam message patterns.
- **Model Training**: Utilizes different classification algorithms such as Naive Bayes, Logistic Regression, SVM, Random Forest, and XGBoost for spam detection.
- **Performance Evaluation**: Evaluates models based on accuracy and precision.

## Project Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/ezaanamin/SpamSlayer-3000.git
   cd SpamSlayer-3000
   ```

2. Install the required libraries:
   ```bash
   pip install -r requirements.txt
   ```

3. Download the dataset:
   - You can upload your dataset to the project directory or adjust the dataset path in the code.

4. Run the main script:
   ```bash
   python main.py
   ```

## Data

The dataset used in this project is a collection of SMS messages, which are classified as spam or not spam. The dataset is loaded from a CSV file (`spam.csv`) and preprocessed before feeding it to the machine learning models.

- **Columns in the dataset**:
  - `v1`: Target label (spam or not spam)
  - `v2`: The actual SMS text

## Results

The performance of the different models is evaluated on the dataset, and the results are as follows:

### Support Vector Classifier (SVC)
- **Accuracy**: 97.58%
- **Precision**: 97.48%

### K-Nearest Neighbors (KN)
- **Accuracy**: 90.52%
- **Precision**: 100%

### Naive Bayes (NB)
- **Accuracy**: 97.10%
- **Precision**: 100%

### Decision Tree (DT)
- **Accuracy**: 93.04%
- **Precision**: 81.73%

### Logistic Regression (LR)
- **Accuracy**: 95.84%
- **Precision**: 97.03%

### Random Forest (RF)
- **Accuracy**: 97.58%
- **Precision**: 98.29%

### AdaBoost
- **Accuracy**: 92.46%
- **Precision**: 84.88%

### Extra Trees Classifier (ETC)
- **Accuracy**: 97.49%
- **Precision**: 97.46%

### Gradient Boosting Decision Trees (GBDT)
- **Accuracy**: 94.68%
- **Precision**: 91.92%

### XGBoost (xgb)
- **Accuracy**: 96.71%
- **Precision**: 92.62%

After testing various models, **Naive Bayes (NB)** was selected as the final model due to its strong performance with an accuracy of 97.10% and a precision of 100%.

## Results Visualization

- **Spam vs Non-Spam Word Cloud**: Displays a word cloud of frequently occurring words in spam and non-spam messages.
- **Histograms**: Visualizes the distribution of message lengths (in terms of characters, words, and sentences) for both spam and non-spam messages.

## How to Use

1. **Train a model**: After preprocessing the dataset, you can choose any of the classifiers and train them using the `train_classifier()` function.
2. **Make Predictions**: Once the model is trained, you can use it to predict whether a given message is spam or not.

## File Structure

```bash
SpamSlayer-3000/
│
├── data/                  # Contains the dataset
├── src/                   # Python scripts for data preprocessing, training, and evaluation
│   ├── main.py            # Main script to run the project
│   ├── model.py           # Model training and evaluation
│   └── preprocessing.py   # Data preprocessing functions
├── requirements.txt       # Required Python libraries
├── README.md              # This file
└── results/                # Contains performance results and visualizations
```

## Dependencies

- `pandas`
- `numpy`
- `scikit-learn`
- `matplotlib`
- `seaborn`
- `nltk`
- `xgboost`


You can install all dependencies by running:
```bash
pip install -r requirements.txt
```

## Contributing

Feel free to fork this repository and contribute to its development. Pull requests are welcome!

## License

This project is licensed under the MIT License.

---

You can now share the updated repository: [SpamSlayer-3000 on GitHub](https://github.com/ezaanamin/SpamSlayer-3000). Let me know if you need any further adjustments!
