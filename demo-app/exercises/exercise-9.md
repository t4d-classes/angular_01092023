# Exercise 9

1. In the Car View Row, add a new button labeled "Archive".

2. On th Car object, add a new boolean field named 'archived'. The initial cars should all be set to false (boolean type).

3. When the 'Archive' button is clicked for car, the car should be marked as archived.

4. Add a column before the actions column of the Car View/Edit Row which displays the archive status. Use a pipe to display the archive status of the car. Archive Status Pipe: Boolean => String. For `true`, display "Archived". For `false`, display "Active". Create the archive pipe in the shared module.

5. The archive status is not editable in the Car Edit Row.