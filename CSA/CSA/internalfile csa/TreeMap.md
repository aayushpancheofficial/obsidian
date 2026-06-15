### Java TreeMap Notes

#### Introduction to TreeMap

Java mein **TreeMap** `java.util` package ka ek hissa hai aur ye **NavigableMap interface** ko implement karta hai (jo internally `SortedMap` ko extend karta hai).

- **Key-Value Pair + Sorted Keys:** HashMap ki tarah TreeMap bhi data ko **Key-Value pairs** mein store karta hai, lekin iski sabse badi khasiyat ye hai ki ye saari **Keys ko automatic ascending order (natural sorting order)** mein arrange karke rakhta hai.
    
- **Backing Structure:** TreeMap internally data store aur manage karne ke liye ek **Red-Black Tree** (ek self-balancing binary search tree) ka use karta hai.
    

#### Key Features of TreeMap (Points)

1. **Unique Keys, Sorted Order:** HashMap ki tarah isme bhi saari **Keys unique** honi chahiye, lekin ye keys hamesha sorted form mein rehti hain. Values duplicate ho sakti hain.
    
2. **Strictly No Null Keys:** TreeMap mein aap **`null` key store nahi kar sakte**. Agar aap `null` key daalne ki koshish karenge, toh ye `NullPointerException` throw karega (kyunki elements ko sort karne ke liye keys ka comparison hota hai, aur null kisi se compare nahi ho sakta). Halanki, **Values mein aap null store kar sakte hain**.
    
3. **Performance:** Isme basic operations jaise `put()`, `get()`, aur `remove()` ki time complexity
    
    $$O(\log n)$$
    
    hoti hai, jo HashMap ($O(1)$) se thodi slow hai kyunki har insertion ya deletion par tree khud ko re-balance karta hai.
    
4. **Custom Sorting:** Default roop se ye natural ascending order follow karta hai, lekin aap `Comparator` ka use karke custom sorting order (jaise descending order) bhi implement kar sakte hain.
    

#### TreeMap Internal Structure Diagram

Exam mein TreeMap ko samjhane ke liye ye Red-Black Tree aur Key-Value mapping ka structure bahut helpful hota hai:

- **Working Principle:** Tree ka har ek node ek Key-Value pair hota hai. Keys ke basis par binary search tree rule chalta hai—choti keys left side mein aur badi keys right side mein store hoti hain.
    

#### Syntax and Initialization

Java

```java
import java.util.TreeMap; // Package import karna zaroori hai

// Syntax: TreeMap<KeyDataType, ValueDataType> mapName = new TreeMap<>();
TreeMap<Integer, String> treeMap = new TreeMap<>(); 
```

#### Common Methods with Code Example

TreeMap ke paas `SortedMap` aur `NavigableMap` ke kaafi unique aur powerful methods hote hain:

Java

```java
import java.util.TreeMap;
import java.util.Map;

public class TreeMapExample {
    public static void main(String[] args) {
        // 1. TreeMap create karna (Roll No -> Student Name)
        TreeMap<Integer, String> students = new TreeMap<>();

        // 2. put() - Random order mein data add karna
        students.put(103, "Rahul");
        students.put(101, "Aayush");
        students.put(104, "Amit");
        students.put(102, "Vijay");

        // Output hamesha KEYS ke ascending order mein aayega
        System.out.println("TreeMap (Sorted by Keys): " + students);
        // Output: {101=Aayush, 102=Vijay, 103=Rahul, 104=Amit}

        // 3. Special Methods
        System.out.println("First Key: " + students.firstKey()); // Output: 101
        System.out.println("Last Key: " + students.lastKey());   // Output: 104

        // 4. Navigable Methods
        // headMap(key) - Diye gaye key se choti saari entries return karega
        System.out.println("Entries before 103: " + students.headMap(103)); // {101=Aayush, 102=Vijay}

        // tailMap(key) - Diye gaye key se badi ya barabar saari entries
        System.out.println("Entries from 103: " + students.tailMap(103)); // {103=Rahul, 104=Amit}
        
        // higherKey() - Just badi key nikalne ke liye
        System.out.println("Key higher than 102: " + students.higherKey(102)); // Output: 103
    }
}
```

#### Difference Between HashMap and TreeMap (Exam View)

Yeh comparison kaafi baar short/long notes dono mein pucha jata hai:

|**Feature**|**HashMap**|**TreeMap**|
|---|---|---|
|**Underlying Structure**|Internally **HashTable** use karta hai.|Internally **Red-Black Tree** (Balanced BST) use karta hai.|
|**Sorting / Order**|Kisi bhi tarah ka order maintain nahi karta.|Keys ko hamesha **Sorted Order** mein rakhta hai.|
|**Null Keys**|Ek `null` key allow karta hai.|Ek bhi `null` key allow **nahi** karta (`NullPointerException`).|
|**Performance**|**Fast** hota hai ($O(1)$ time complexity).|HashMap se thoda **Slow** hota hai ($O(\log n)$ time complexity).|
|**Best Used For**|Jab aapko sirf fast lookups/search chahiye aur order se koi matlab na ho.|Jab aapko data ko hamesha sorted format mein rakhna ho aur range-queries (`headMap`, `tailMap`) chalani hon.|

#### 🌟 Exam Last-Minute Revision Points (TreeMap)

> ⚡ **TreeMap Cheat-Sheet:**
> 
> - **Main Purpose:** Jab aapko **Key-Value** pair store karna ho aur data automatic **Keys ke hisab se sorted** chahiye.
>     
> - **Keywords:** `java.util.TreeMap`, Implements `NavigableMap`, Uses `Red-Black Tree`.
>     
> - **Strict Rule:** **No Null Keys allowed!** (Lekin Null Values allowed hain).
>     
> - **Speed:** Search aur insertion dono ke liye
>     
>     $$O(\log n)$$
>     
>     Time Complexity hoti hai.
>     
> - **Key Methods for Exam:** `firstKey()`, `lastKey()`, `headMap()`, `tailMap()`.
>