IF DB_ID('ProjectDb') IS NOT NULL
BEGIN
	use ProjectDb;
	DROP TABLE SONG;
	DROP TABLE PLAYLIST;
END

ELSE
BEGIN
	CREATE DATABASE ProjectDb;
END

GO

CREATE TABLE PLAYLIST(
		ID int IDENTITY(0,1) PRIMARY KEY,
		name nvarchar(255),
		type nvarchar(255),
);
		
CREATE TABLE SONG(
		ID int IDENTITY(0,1) PRIMARY KEY,
		position nvarchar(255),
		name nvarchar(255),
		artist nvarchar(255),
		link nvarchar(255),
		playlist_id int NOT NULL FOREIGN KEY REFERENCES PLAYLIST(ID)
);
		
		