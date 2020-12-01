$Trigger= New-ScheduledTaskTrigger -At 04:29pm -Daily
$User= "NT AUTHORITY\SYSTEM"
$Action= New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "C:\Users\Matej\Desktop\getAllData.ps1"
Register-ScheduledTask -TaskName "StartupScript_PS" -Trigger $Trigger -User $User -Action $Action -RunLevel Highest –Force