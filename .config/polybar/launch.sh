#nate already running bar instances
killall -q polybar
# If all your bars have ipc enabled, you can also use 
# # polybar-msg cmd quit
#
# # Launch bar1 and bar2
 echo "---" | tee -a /tmp/polybar1.log /tmp/polybar2.log
 polybar pam1 >>/tmp/polybar1.log 2>&1 &
 polybar pam2 >>/tmp/polybar1.log 2>&1 &
 polybar pam3 >>/tmp/polybar2.log 2>&1 &
 polybar pam4 >>/tmp/polybar3.log 2>&1 &
 polybar pam5 >>/tmp/polybar1.log 2>&1 &
 polybar pam6 >>/tmp/polybar1.log 2>&1 &
# polybar power >>/tmp/polybar1.log 2>&1 &
#
#
echo "Bars launched..."
