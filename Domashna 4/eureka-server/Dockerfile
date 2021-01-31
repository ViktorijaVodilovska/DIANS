FROM openjdk:11-jre-slim
EXPOSE 3000/TCP
VOLUME /tmp
ADD target/eureka-server-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]