IF DB_ID('ProjectDb') IS NOT NULL
BEGIN
	use ProjectDb;
	DROP TABLE SONG;
	DROP TABLE PLAYLIST;
END

ELSE
BEGIN
	CREATE DATABASE ProjectDb;
	use ProjectDb;
END

GO
CREATE DATABASE ProjectDb;
	use ProjectDb;

CREATE TABLE PLAYLIST(
		ID int IDENTITY(0,1) PRIMARY KEY,
		name nvarchar(255),
		link nvarchar(255),
);
		

		
		