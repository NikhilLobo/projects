# Research project for the course Data Science 

# Name: Nikhil Lobo
# ID: W3124829
# Course: CSIS 733
#
# E-mail: nikhil.lobo@my.uwrf.edu
# Description: Analyzing MBA students data to predict the salary.

#### Setup workspace ####
graphics.off()
rm(list=ls())
setwd("~/Desktop/Data Science")
library(ggplot2)
library(tidyverse)
library(dplyr)
library(lattice)
library(class)
##########################

mba<-read_csv("Students.csv")
# Displaying the data 
view(mba)
str(mba)
head(mba)
# Checking wetehr it is a dataframe
is.data.frame(mba)

# Cleaning the data
# 998   -   did not answer the survey
# 999   -   answered the survey but didn't disclose salary data
mba<-filter(mba,salary!=999 &salary!=998)
View(mba)
nrow(mba)

# The sex value is numeric to making it as charater
as.character(mba$sex)
mba[mba$sex==1,]$sex<-"Male"
mba[mba$sex==2,]$sex<-"Female"

mba$sex


# Sex has it two values either Male or Female. 
# So changing its data type to factor
mba$sex<-as.factor(mba$sex)
is.factor(mba$sex)


# Classifying the data based on salary using the dplyr package
# Creating a subset of those who have given their salary details.
employed <- filter(mba,salary>0)
nrow(employed)

# Subset of those who have not given their salary details or dont have the job
notemployed <- filter(mba,salary==0)
nrow(notemployed)


# Gives the total count of number of males and females in the dataset.
table(mba$sex)

# Number of placed males and females
counts<-table(employed$sex)
counts

# Bar and Pie graph shows the count of number of males and females

# BarGraph
barplot(counts, main="Placed males and females", 
        names.arg=c("Female", "Male"),col=c("green","orange"))
# PieGraph
pie(counts,col=c("green","orange"),main="Placed graduates count as per sex", 
    labels = c("Female", "Male"))

# Job Satisfaction
ggplot(employed,aes(satis))+geom_histogram(binwidth=0.5,aes(fill=sex))+
  xlab("Job Satisfaction")+   ylab("Frequency") + ggtitle("Job Satisfaction")


# Calculating the avarage salary of placed male and females
Avg_sal<-employed %>% group_by(sex) %>% summarise(Average=mean(salary))
Avg_sal

# Plotting the bar graph based on average salary of male and female
ggplot(Avg_sal, aes(x = sex, y = Average, fill = factor(sex))) +
  geom_bar(stat = "identity",width=0.3)+
  geom_text(aes(label=Average),vjust=-0.25)+
  ggtitle("Average number of salary as per sex")

# Filtering only the Male salary 
male_sal<-employed %>% filter(sex=="Male")

# Filtering only the Female salary 
female_sal<-employed %>% filter(sex=="Female") 



# Comparing the both mean salary of males and females using T-test
# cant compare as p value is greater than 0.05. The value for p is=0.1809
t.test(male_sal$salary,female_sal$salary)  

# Comparing the performance of placed students. 
# xyplot used from the "lattice" package.
xyplot(employed$s_avg ~ employed$f_avg,main="MBA performance of placed students"
       ,ylab="spring average",type = c("p", "g"), xlab="fall average",
       groups = employed$sex,auto.key = TRUE)



######  Models ########

# Mean as a model
ggplot(employed,aes(x=work_yrs,y=salary))+
  geom_point(aes(color=sex))+geom_hline(yintercept=mean(employed$salary)) + ggtitle("Mean As a Model")

# Regression Model to predict the salary
# Basic Model Linear Regression
model1<-lm(formula = salary ~ work_yrs,data=employed) 
summary(model1)

# Plotting the linear reegression line for the above model
ggplot(employed,aes(x=work_yrs,y=salary))+geom_point(aes(color=sex))+
  geom_smooth(method = lm) + ggtitle("Linear Regression")
  
# Multiple Regression model,to get the increased R^2 value compared to previous.
model2<-lm(formula = salary ~ age+gmat_vpc+gmat_qpc,data=employed) 
summary(model2)


# Knn to classify the students as employed or not.
# Adding the new column as "job" for the labes.
mba$job<-mba$salary == 0

# Scaling the data set to match the values with other columns
mba[, c(1,3,4,5,6,7,8,10,12)] <-scale(mba[, c(1,3,4,5,6,7,8,10,12)])

# Dividing the dat as train (80%) and test (20%) to give input to KNN
data_size<-nrow(mba)
rate<-0.8
num_train= rate* data_size
num_test= (1 - rate) * data_size
train_id<-sample(1:data_size, num_train, replace=FALSE) 
train_data<-mba[train_id,c(1,3,4,5,6,7,8,10,12) ]
train_labels<-mba$job[train_id]
test_id<-setdiff(1:data_size, train_id)
test_data<-mba[test_id,c(1,3,4,5,6,7,8,10,12) ]
test_true_labels<-mba$job[test_id]

# Running KNN
predicted<-knn(train_data, test_data, train_labels, k = 2)
predicted

summary(predicted)
# Accuracy and misclassification rate. 
incorrect_labels <- sum(predicted != test_true_labels)
mis_rate <-incorrect_labels / num_test
mis_rate


# k-NN does not tell us which predictors are important;
# we don’t get a table of coefficients with p-values. 
# Using Logical regression to predict the job or notjob
# Creating the separate 80% and 20% data


train_id<-sample(1:data_size, num_train, replace=FALSE) 
train_data<-mba[train_id,]
test_id<-setdiff(1:data_size, train_id)
test_data<-mba[test_id,]


# Step by Step logistic model regression 
# by removing least p-value variable step by step
# untill best fit ( big residual deviance )
modelL1 <- glm(job ~ age + work_yrs + gmat_tot + satis + gmat_vpc +
               gmat_qpc + gmat_tpc + s_avg + f_avg, data = train_data, 
               family = binomial(link = logit))
summary(modelL1)

modelL2 <- glm(job ~ age + work_yrs + gmat_tot + satis + gmat_qpc + 
                 gmat_tpc + s_avg, data = train_data, 
               family = binomial(link = logit))
summary(modelL2)

modelL3 <- glm(job ~ age + work_yrs + gmat_tot + satis + gmat_tpc + 
                 s_avg, data = train_data, family = binomial(link = logit))
summary(modelL3)


modelL4 <- glm(job ~ age + gmat_tot + satis + gmat_tpc + 
                 s_avg, data = train_data, family = binomial(link = logit))
summary(modelL4)

modelL5 <- glm(job ~ age + gmat_tot + s_avg, data = train_data,
               family = binomial(link = logit))
summary(modelL5)


modelL6 <- glm(job ~ age + s_avg, data = train_data,
               family = binomial(link = logit))
summary(modelL6)

# Predicting and creating new in column in test_dat as probability.
test_data$Prob <- predict(modelL6, test_data, type = "response")

View(test_data)





