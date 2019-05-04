nums = dict({'one':1,'four':4,'two':2,'three':3})

for eachval1 in nums:
       for eachval2 in nums:
              if(eachval1>eachval2):
                     tempVar=eachval1
                     eachval1=eachval2
                     eachval2=tempVar
print(nums)                     