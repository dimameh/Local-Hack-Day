import pymysql
import time
import datetime
 
con = pymysql.connect('localhost', 'root', '', 'db')


while True:
    with con:  	
        print("ЦИКЛ")
        cur = con.cursor()
        cur.execute("SELECT id_message, readingtime, timetolive FROM message;")
        messages = cur.fetchall()

        for message in messages:
            if (message[1] != None):
                if message[1] + datetime.timedelta(seconds=60) < datetime.datetime.now(tz=None):
                    print(f"DELETE ID - {message[0]}")
                    cur.execute(f"DELETE FROM message WHERE id_message = {message[0]};")
                    cur.fetchall()

        print("КОНЕЦ ЦИКЛА")
        time.sleep(5)