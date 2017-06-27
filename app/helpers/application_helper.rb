module ApplicationHelper
	def get_season()
    	# Object that retrieves date information
    	# Also retrieve year, day, wday (0 - 6), yday (0 - 365),hour (24), min (59), sec (59), zone (Time Zone)
    	time = Time.new
 
    	if(time.month >= 3) && (time.month <= 5)
      	"First Term... I wann find myself and explore"
    	elsif (time.month > 5) && (time.month <= 8)
      	"Second Term... I wanna pass"
    	elsif (time.month > 8) && (time.month <= 10)
      	"Third Term... Would I still get a job"
    	else
      	"yah no am just happy to be alive really"
    	end
  	end
  	def buzzvalue(i= 100)
  		value=" "
  		 if (i%5==0)
	 		if (i%3==0)
 				value+="FizzBuzz"
 			else
 				value+="Buzz"
 			end
	 	else
	 		if (i%3==0)
 				value+="Fizz"
		 else
 			value+=i.to_s 
 		end

 	end
 	"#{value}"
  	end

  	def get_random_number(max_value = 100)
    	rand(max_value)
  	end
  	def experince_(min_value, max_value)
  		x= min_value
  		values=""
  		loop do
  			 values+= buzzvalue(x)+" "
  			 x+=1
  			 break if x>max_value
  		end
  		"#{values}"
    end
end
